import  { useCallback, useEffect, useRef, useState}  from 'react';
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
} from '@chakra-ui/react';
import { Formik, Form} from 'formik';
import { useNavigate, useParams } from "react-router-dom";
import { FC } from 'react';
import { validationSchema, INITIALVALUES } from '../domain';
import { useAddStudent, useEditStudent } from '../hooks';
import { STUDENT } from '../interfaces';
import { DocumentationForm, PersonalInformationForm, ArtisticReference } from '../form';
import { transformData } from '@/helpers';

interface Props {
    edit: boolean | undefined;
}

export const FormStudent: FC<Props> = ({ edit }) => {

    const [initialValues, setInitialValues] = useState<STUDENT>(INITIALVALUES);

    const { isOpen, onOpen, onClose,  } = useDisclosure()


    const [step, setStep] = useState(1);

    const [progress, setProgress] = useState(33.33);

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const params = useParams();
    const navigate = useNavigate();

    const { addStudent } = useAddStudent();

    const { data, editStudent } = useEditStudent({ parameter: params.id!, edit: edit! })


    const closeModal = useCallback(() => {
        onClose();
        navigate('/');
    }, [])

    useEffect(() => { 
        if(isOpen === false) closeModal();
      }, [isOpen, closeModal]);

    useEffect(() => {
        if(edit && params.id) onOpen();
      }, [params.id, edit, onOpen]);

    useEffect(() => {
        if(!params.id) closeModal();
    }, [params.id, closeModal]);


    useEffect(() => {
        if(data !== undefined){
          setInitialValues({
                name: data.name,
                last_name: data.last_name, 
                mother_last_name: data.mother_last_name, 
                dni: data.dni,
                image: data.image
              })
        } else {
          setInitialValues(INITIALVALUES)
        }
      }, [data]);

    return (
        <>
            <Button variant={'outline'} color='white' onClick={onOpen} width={200} alignSelf={"center"}>
                Registrar alumno
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                                    
                <ModalContent maxWidth={500}>
                    <ModalHeader textAlign={'center'}>
                        { params.id ? 'Editar ' : 'Registrar ' }
                        alumno
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Formik
                            initialValues={ initialValues }
                            validationSchema={validationSchema}
                            onSubmit={(values, { resetForm })=>{
                                const { valuesToSend } = transformData(values)
                                // console.log("valuesToSend", valuesToSend)
                                if(!params.id && !edit){
                                    addStudent.mutate(valuesToSend)
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
                                                { step === 2 && (<DocumentationForm values={values}/>)} 
                                                {step === 3 && (<ArtisticReference/>)}
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
                                                                        phone_number,
                                                                        type_document, 
                                                                        document_number,
                                                                        age,
                                                                        date_admission,
                                                                    } = values;

                                                                    if(step === 1){
                                                                        if(name && last_name && mother_last_name && phone_number){
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
                                                                    { params.id ? 'Editar' : 'Registrar' }
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
}









