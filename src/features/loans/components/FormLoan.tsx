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
} from '@chakra-ui/react'

import { Formik, Form } from 'formik';
import { INITIALVALUES, LoanValidationSchema } from '../domain';
import { useNavigate } from 'react-router-dom';
import { useAddLoan } from '../hooks';

type Props = {
  edit? : boolean
}


export const FormLoan: FC<Props> = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { addLoan } = useAddLoan();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState<Loan>(INITIALVALUES); 

    const closeModal = useCallback(() => {
      onClose();
      navigate('/schedules')
  }, [onClose, navigate])

    useEffect(() => { 
      if(isOpen === false) closeModal();
  }, [isOpen]);


  return (
    <>
      <Button onClick={onOpen} bg={'blue'}>Crear Horario</Button>
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
                addLoan.mutate(values)
                closeModal();
              }}
              enableReinitialize = {true}
              validationSchema={LoanValidationSchema}
            >
              {
                ()=>(
                  <Form>
                    
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
