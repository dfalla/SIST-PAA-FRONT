import { useState, FC, useEffect, useCallback } from 'react';

import { Loan } from '@/interfaces';

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
  VStack,
} from '@chakra-ui/react'

import { Formik, Form } from 'formik';
import { INITIALVALUES, LoanValidationSchema } from '../domain';
import { useNavigate } from 'react-router-dom';
import { useAddLoan } from '../hooks';
import { InputField } from '@/common';
import { dataToLoans, returnDateFormat } from '@/helpers';

type Props = {
  edit? : boolean
}


export const FormLoan: FC<Props> = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { addLoan } = useAddLoan();
    const navigate = useNavigate();

    const today = returnDateFormat();

    const [initialValues] = useState<Loan>(INITIALVALUES); 

    const closeModal = useCallback(() => {
      onClose();
      // navigate('/loans')
  }, [onClose, navigate])

    useEffect(() => { 
      if(isOpen === false) closeModal();
  }, [isOpen]);


  return (
    <>
      <Button onClick={onOpen} bg={'blue'}>Registrar préstamo</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>
            Regitrar Préstamo
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={initialValues}
              onSubmit={(values)=>{
                const { valuesToSend }= dataToLoans(values);
                addLoan.mutate(valuesToSend)
                closeModal();
              }}
              enableReinitialize = {true}
              validationSchema={LoanValidationSchema}
            >
              {
                ()=>(
                  <Form>
                    <VStack>
                      <InputField
                        label        = 'Nombre' 
                        name         = 'name' 
                        placeholder  = 'Escribe el nombre' 
                      />
                      <InputField
                        label        = 'Apellidos' 
                        name         = 'last_name' 
                        placeholder  = 'Escribe los apellidos' 
                      />
                      <InputField
                        label        = 'Capital' 
                        name         = 'capital' 
                        placeholder  = 'Ingresa el monto'
                        type         = 'number' 
                      />
                      <InputField
                          label      = 'Fecha de entrega del dinero'
                          name       = 'money_delivery_date'
                          type       = 'date'
                          min        = { today } 
                      />
                    </VStack>
                    <HStack mt={5} justifyContent={'space-between'}>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Cerrar
                      </Button>
                      <Button variant='ghost' type='submit'>
                        Registrar Préstamo
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
