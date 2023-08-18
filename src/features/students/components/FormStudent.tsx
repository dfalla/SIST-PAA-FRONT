import  { useEffect, useRef, useState }  from 'react';


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

// import { useNavigate, useParams } from "react-router-dom";


import { InputField, SafeAny } from "@/common";
import { INITIALVALUES, validationSchema } from '../domain';
import { useAddStudent } from '../hooks';


export const FormStudent = () => {

    const { isOpen, onOpen, onClose,  } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const { addStudent } = useAddStudent();


    // const params = useParams();

    // useEffect(() => {
    //     if(!params.id) onClose();
    // }, [params.id, onClose]);

    return (
        <>
            <Button variant={'outline'} color='white' onClick={onOpen} width={200} alignSelf={"center"}>
            Registrar nuevo producto
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
                    {/* { params.id ? 'Editar ' : 'Registrar nuevo ' } */}
                    Registrar Alumno
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Formik
                        initialValues={ INITIALVALUES }
                        onSubmit={ (values) => {
                            values.dni = values.dni.toString();
                            // console.log("values", values)
                            addStudent.mutate(values);
                            if(addStudent.isError === false) onClose()

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
                                    {/* { params.id ? 'Editar' : 'Registrar' } */}
                                    Registrar
                                </Button>
                                <Button onClick={onClose} colorScheme='red'>
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
