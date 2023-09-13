import { Schedule } from '@/interfaces';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'


  import { Formik, Form } from 'formik';
import { useState } from 'react';
import { INITIALVALUES } from '../domain';



export const FormSchedule = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [initialValues, setInitialValues] = useState<Schedule>(INITIALVALUES); 
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
          <ModalHeader>Crea horario de ensayo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={initialValues}
              onSubmit={(values)=>{
                console.log("values", values)
              }}
              enableReinitialize = {true}
            >
              {
                ()=>(
                  <Form>
                    
                  </Form>
                )
              }
            </Formik>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
