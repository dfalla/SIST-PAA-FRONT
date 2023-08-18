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
} from '@chakra-ui/react';

import { Formik, Form } from 'formik';

import { useNavigate, useParams } from "react-router-dom";


import { FC } from 'react';
import { CustomModal, InputField, SafeAny } from "@/common";
import { INITIALVALUES, validationSchema } from '../domain';
import { useAddStudent, useEditStudent } from '../hooks';
import { Student } from '@/interfaces';

interface Props {
    edit: boolean | undefined;
}

export const FormStudent: FC<Props> = ({ edit }) => {

  const [initialValues, setInitialValues] = useState<Student>(INITIALVALUES);

    const { isOpen, onOpen, onClose,  } = useDisclosure()

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
                                <VStack alignItems={'flex-start'} marginBottom={4}>

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

                                </VStack>

                                <HStack justifyContent={'space-between'}>
                                <Button bg='brand.clonika.blue.800' mr={3} type='submit'>
                                    { params.id ? 'Editar' : 'Registrar' }
                                </Button>

                                <Button onClick={closeModal} colorScheme='red'>
                                    Cancelar
                                </Button>
                                </HStack>
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
