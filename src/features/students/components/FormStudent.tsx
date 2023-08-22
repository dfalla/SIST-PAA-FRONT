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
    VStack,
    HStack,
    Input,
    Text,
    Box,
    Progress,
    ButtonGroup,
    Flex,
    Heading,
} from '@chakra-ui/react';

import { Formik, Form } from 'formik';

import { useNavigate, useParams } from "react-router-dom";


import { FC } from 'react';
import { InputField, SafeAny, SelectField } from "@/common";
import { PERSONALINFORMATIONINITIALVALUES, PersonalInformationvalidationSchema } from '../domain';
import { useAddStudent, useEditStudent } from '../hooks';
import { Student } from '@/interfaces';

interface Props {
    edit: boolean | undefined;
}

interface OptionsProps {
    label: string;
    value: string;
}

const PersonalInformationForm = () => {
    return(
        <Formik
            initialValues={ PERSONALINFORMATIONINITIALVALUES }
            validationSchema={ PersonalInformationvalidationSchema }
            onSubmit={(values)=> {
                console.log("values", values)
            }}
            enableReinitialize={true}
        >
                {({ setFieldValue })=>(
                    <Form>
                        <VStack gap={3}>
                        <Heading width={'100%'} textAlign={'center'} fontWeight={'normal'} mb="2%">
                            Información Personal
                        </Heading>
                        <HStack>
                            <InputField
                                name='name'
                                label='Nombre'
                                type='text'
                                variant={'filled'}
                            />

                            <InputField
                                name='phone_number'
                                label='Teléfono'
                                type='text'
                                variant={'filled'}
                            />
                        </HStack>
                        <HStack>
                            <InputField
                                name='last_name'
                                label='Apellido Materno'
                                type='text'
                                variant={'filled'}
                            />
                            <InputField
                                name='mother_last_name'
                                label='Apellido Materno'
                                type='text'
                                variant={'filled'}
                            />
                        </HStack>
                        <HStack>
                            <Text fontWeight={'bold'}>
                                Selecciona una imagen
                            </Text>
                            <Input
                                name='image'
                                onChange={(e: SafeAny)=>setFieldValue('image', e.target.files[0])}
                                type='file'
                            />
                        </HStack>
                        </VStack>
                    </Form>
                )}
        </Formik>
    )
}

const DocumentationForm = () => {

    const options: OptionsProps[] = [
        {
            label: 'DNI',
            value: 'dni'
        },
        {
            label: 'Carnet de Extranjería',
            value: 'ce'
        },
    ]

    return(
        <VStack gap={3}>
            <Heading width={'100%'} textAlign={'center'} fontWeight={'normal'} mb="2%">
                Documentación
            </Heading>
            <HStack>
                <SelectField name='type_document' label="Selecciona una opción" options={options}/>
                <InputField
                    name='document_number'
                    label='Número de documento'
                    type='text'
                    variant={'filled'}
                />
            </HStack>
            <HStack>
                <InputField
                    name='age'
                    label='Edad'
                    type='number'
                    variant={'filled'}
                />
                <InputField
                    name='date_admission'
                    label='Fecha de ingreso'
                    type='date'
                    // variant={'filled'}
                />
            </HStack>
        </VStack>
    )
}

const ArtisticReferenceForm = () => {
    const optionsCategory: OptionsProps[] = [
        {
            label: 'Niños',
            value: 'nino'
        },
        {
            label: 'Jóvenes',
            value: 'joven'
        },
        {
            label: 'Adultos',
            value: 'adulto'
        },
    ]

    const optionsLevel: OptionsProps[] = [
        {
            label: 'Básico',
            value: 'basico'
        },
        {
            label: 'Intermedio',
            value: 'intermedio'
        },
        {
            label: 'Avanzado',
            value: 'avanzado'
        },
    ]
    return(
        <>
            <Heading width={'100%'} textAlign={'center'} fontWeight={'normal'} mb="2%">
                Referencia Artística
            </Heading>
            <HStack>
                <SelectField name='category' label="Selecciona una opción" options={optionsCategory}/>
                <SelectField name='level' label="Selecciona una opción" options={optionsLevel}/>
                <InputField
                    name='amount_payable'
                    label='Monto a pagar'
                    type='number'
                    variant={'filled'}
                />
            </HStack>
        </>
    );
}

export const FormStudent: FC<Props> = ({ edit }) => {

    const [initialValues, setInitialValues] = useState<Student>(INITIALVALUES);

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
            <ModalContent>
                <ModalHeader textAlign={'center'}>
                    { params.id ? 'Editar ' : 'Registrar ' }
                    alumno
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Formik
                        initialValues={ initialValues }
                        onSubmit={ (values) => {
                            values.dni = values.dni.toString();

                            if(!params.id && !edit){
                                addStudent.mutate(values);
                            }

                            if(params.id !== undefined && edit === true){
                                
                                const VALUES: Student = {
                                    dni: values.dni,
                                    image: values.image,
                                    last_name: values.last_name,
                                    mother_last_name: values.mother_last_name,
                                    name: values.name
                                }
                                editStudent.mutate({id_student: params.id, values: VALUES})
                            }
                            // if(addStudent.isError === false) onClose()

                            closeModal();
                        }}
                        validationSchema={validationSchema}
                        enableReinitialize={true}
                    >
                        {
                            ({ setFieldValue })=>(
                            <Form>
                                {/* <VStack alignItems={'flex-start'} marginBottom={4}>

                                <HStack
                                  justifyContent={'space-between'}
                                  flexDirection={{base: 'column', md:'row'}}
                                  width={{base: '100%'}}
                                >
                                    <InputField
                                        name='name'
                                        label='Nombre'
                                        type='text'
                                        variant={'filled'}
                                    /> 

                                    <InputField
                                        name='dni'
                                        label='DNI'
                                        type='number'
                                        variant={'filled'}
                                    />
                                </HStack>

                                <InputField
                                    name='last_name'
                                    label='Apellido Paterno'
                                    type='text'
                                    variant={'filled'}
                                /> 

                                <InputField
                                    name='mother_last_name'
                                    label='Apellido Materno'
                                    type='text'
                                    variant={'filled'}
                                /> 

                                <Text fontWeight={'bold'}>
                                    Selecciona una imagen
                                </Text>
                                <Input
                                    name='image'
                                    onChange={(e: SafeAny)=>setFieldValue('image', e.target.files[0])}
                                    type='file'
                                /> 

                                </VStack> */}
                                <Box
                                    borderWidth='1px'
                                    rounded='lg'
                                    shadow="1px 1px 1px rgba(0,0,0,0.3)"
                                    p={6}
                                    m="10px auto"
                                >
                                    <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
                                    {step === 1 ? <PersonalInformationForm /> : step === 2 ? <DocumentationForm /> : <ArtisticReferenceForm />}
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
                                                setStep(step + 1)
                                                if (step === 3) {
                                                    setProgress(100)
                                                } else {
                                                    setProgress(progress + 33.33)
                                                }
                                                }}
                                                colorScheme="teal"
                                                variant="outline">
                                                Next
                                            </Button>
                                            </Flex>
                                            {step === 3 ? (
                                            <HStack justifyContent={'space-between'} gap={3}>
                                                <Button bg='brand.clonika.blue.800' mr={3} type='submit'>
                                                    { params.id ? 'Editar' : 'Registrar' }
                                                </Button>
            
                                                {/* <Button onClick={closeModal} colorScheme='red'>
                                                    Cancelar
                                                </Button> */}
                                            </HStack>
                                            ) : null}
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









