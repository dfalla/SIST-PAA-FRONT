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

import { useNavigate, useParams } from "react-router-dom";


import { InputField, SafeAny } from "@/common";


export const FormStudent = () => {

    const { isOpen, onOpen, onClose,  } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const params = useParams();

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
                    { params.id ? 'Editar ' : 'Registrar nuevo ' }
                    producto
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Formik
                        initialValues={ initialValues }
                        onSubmit={ (values) => {
                            console.log("values", values)

                        }}
                        validationSchema={validationSchema}
                        enableReinitialize={true}
                    >
                        {
                            ({ setFieldValue })=>(
                            <Form>
                                <VStack alignItems={'flex-start'} marginBottom={4}>
                                <InputField
                                    name='marca'
                                    label='Marca'
                                    type='text'
                                    variant={'filled'}
                                /> 

                                <InputField
                                    name='descripcion'
                                    label='Descripcion del producto'
                                    type='text'
                                    variant={'filled'}
                                /> 

                                <InputField
                                    name='precio'
                                    label='Precio del producto'
                                    type='number'
                                    variant={'filled'}
                                /> 

                                <InputField
                                    name='stock'
                                    label='¿Cuántos productos hay en Stock?'
                                    type='number'
                                    variant={'filled'}
                                /> 

                                <Text fontWeight={'bold'}>
                                    Selecciona una imagen
                                </Text>
                                <Input
                                    name='imagen'
                                    onChange={(e: SafeAny)=>setFieldValue('imagen', e.target.files[0])}
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
