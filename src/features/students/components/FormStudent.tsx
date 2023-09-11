import  { useCallback, useEffect, useRef, useState, FC, memo}  from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    HStack,
    Box,
    Progress,
    ButtonGroup,
    Flex,
    IconButton,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useNavigate, useParams } from "react-router-dom";
import { 
    // validationSchema,
    PersonalInformationvalidationSchema,
    DocumentationvalidationSchema,
    ArtisticReferencevalidationSchema ,
    INITIALVALUES 
} from '../domain';
import { useAddStudent, useEditStudent } from '../hooks';
import { STUDENT } from '../interfaces';
import { DocumentationForm, PersonalInformationForm, ArtisticReference } from '../form';
import { customDateRevert, transformData, trueOrFalse } from '@/helpers';
import { LiaEdit } from 'react-icons/lia';
import { useAppContext } from '@/context';

interface Props {
    icon?             : boolean;
    id?               : string;   
    edit              : boolean | undefined;
}

export const FormStudent: FC<Props> = memo(({ edit, icon, id }) => {

    const {isOpen: isContextOpenModal} = useAppContext();

    const [initialValues, setInitialValues] = useState<STUDENT>(INITIALVALUES);    

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [step, setStep] = useState(1);

    const [progress, setProgress] = useState(33.33);

    const initialRef = useRef(null)

    const finalRef = useRef(null)

    const { id_student } = useParams();
    const navigate = useNavigate();

    const { addStudent } = useAddStudent();


    const { data, editStudent } = useEditStudent({ parameter: id_student! || id!})

    const closeModal = useCallback(() => {
        onClose();
        navigate(icon ? '/students/export': '/')
    }, [onClose, navigate, icon])


    useEffect(() => {
        if(isOpen === false) {
            setStep(1)
            setProgress(33.3)
        }
    }, [isOpen]);

    useEffect(() => { 
        if(isOpen === false) closeModal();
    }, [isOpen]);

    useEffect(() => {
        if(edit && id_student){
            setStep(1)
            setProgress(33.3)
            onOpen()
        }

    }, [id_student, edit, onOpen]);

    useEffect(() => {
        if(isContextOpenModal === true) {
            onOpen();
        }
    }, [isContextOpenModal, onOpen]);

    useEffect(() => {
        if(!id_student) closeModal();
    }, [id_student, closeModal]);


    useEffect(() => {
        if(data !== undefined){
          setInitialValues({
                name: data.name,
                address: data.address,
                age: data.age,
                last_name: data.last_name, 
                mother_last_name: data.mother_last_name, 
                phone_number: data.phone_number,
                type_document: data.type_document, 
                document_number: data.document_number,
                category: data.category,
                level:data.level,
                amount_payable: data.amount_payable,
                active: trueOrFalse(data.active)!,
                date_admission: customDateRevert(data.date_admission),
                image: data.image
              })
        } else {
          setInitialValues(INITIALVALUES)
        }
    }, [data]);

    return (
        <>
            {

                (!icon && !edit) ? (
                    <Button 
                        variant={'outline'} 
                        color='white' 
                        onClick={onOpen} 
                        width={200} 
                        alignSelf={"center"}
                    >
                        Registrar alumno
                    </Button>
                ) : (
                    <IconButton
                        color={'brand.clonika.blue.800'}
                        _hover={{
                            cursor: 'pointer'
                        }}
                        onClick={onOpen}
                        aria-label='edit sale'
                        icon={<LiaEdit fontSize={25}/>}
                    />
                )

            }
                   
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                                    
                <ModalContent maxWidth={500}>
                    <ModalHeader textAlign={'center'}>
                        { id_student ||  icon ? 'Editar ' : 'Registrar ' }
                        alumno
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Formik
                            initialValues={ initialValues }
                            validationSchema={
                                step === 1 && PersonalInformationvalidationSchema ||
                                step === 2 && DocumentationvalidationSchema ||
                                step === 3 && ArtisticReferencevalidationSchema
                            }
                            onSubmit={(values, { resetForm })=>{
                                const { valuesToSend } = transformData(values)

                                if(!id_student && !edit){
                                    addStudent.mutate(valuesToSend)
                                }

                                if((id_student !== undefined && edit === true) || id !== undefined){
                                    editStudent.mutate({id_student: id_student! || id!, values: valuesToSend})
                                }
                                resetForm();
                                closeModal()
                            }}
                            enableReinitialize={true}
                        >
                            {
                                ({ setFieldValue, values })=>(
                                    <Form>
                                        <Box
                                            borderWidth='1px'
                                            rounded='lg'
                                            shadow="1px 1px 1px rgba(0,0,0,0.3)"
                                            p={6}
                                            m="10px auto"
                                            maxWidth={800}
                                        >
                                            <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
                                                {step === 1 && (<PersonalInformationForm setFieldValue={setFieldValue}/>)}
                                                {step === 2 && (<DocumentationForm values={values}/>)} 
                                                {step === 3 && (<ArtisticReference isChecked={values.active}/>)}
                                                <ButtonGroup mt="5%" w="100%">
                                                    <Flex w="100%" justifyContent="space-between">
                                                        <Flex>
                                                            <Button
                                                                onClick={() => {
                                                                setStep(step - 1)
                                                                setProgress(progress - 33.33)
                                                                }}
                                                                isDisabled={step === 1}
                                                                colorScheme="teal"
                                                                variant="solid"
                                                                w="7rem"
                                                                mr="5%">
                                                                Back
                                                            </Button>
                                                            <Button
                                                                w="7rem"
                                                                isDisabled={step === 3}
                                                                onClick={() => {
                                                                    const { 
                                                                        name, 
                                                                        last_name,
                                                                        mother_last_name,
                                                                        address,
                                                                        phone_number,
                                                                        type_document, 
                                                                        document_number,
                                                                        age,
                                                                        date_admission,
                                                                    } = values;

                                                                    if(step === 1){
                                                                        if(name && last_name && mother_last_name && phone_number && address){
                                                                            setStep(step + 1)
                                                                            setProgress(progress + 33.33)

                                                                        }
                                                                    }

                                                                    if(step === 2){
                                                                        if(type_document && document_number && age && date_admission){
                                                                            setStep(step + 1)
                                                                            setProgress(progress + 33.33)

                                                                        }
                                                                    }
                                                                    if (step === 3) {
                                                                        setProgress(100)
                                                                    }
                                                                }}
                                                                colorScheme="teal"
                                                                variant="outline"
                                                            >
                                                                Next
                                                            </Button>
                                                        </Flex>
                                                        {step === 3 && (
                                                            <HStack justifyContent={'space-between'} gap={3}>
                                                                <Button
                                                                    bg='brand.clonika.blue.800'
                                                                    mr={3}
                                                                    type="submit"
                                                                >
                                                                    { (id_student || id) ? 'Editar' : 'Registrar' }
                                                                </Button>
                                                            </HStack>
                                                        )}
                                                    </Flex>
                                                </ButtonGroup>
                                        </Box>
                                    </Form>
                                )
                            }
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
})









