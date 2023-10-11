import { useState, FC, useEffect } from 'react';

import { Schedule } from '@/interfaces';

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
import { INITIALVALUES } from '../domain';
import { GROUPS, HOURS, useAddSchedule } from '..';
import { SelectField } from '@/common';
import { useParams } from 'react-router-dom';

type Props = {
  edit? : boolean
}


export const FormSchedule: FC<Props> = ({edit}) => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { addSchedule } = useAddSchedule();
    const { id_schedule } = useParams();


    const [initialValues, setInitialValues] = useState<Schedule>(INITIALVALUES); 

    useEffect(() => {
      if(edit && id_schedule){
          onOpen()
      }
    }, [id_schedule, edit, onOpen]);
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
                addSchedule.mutate(values)
                onClose()
              }}
              enableReinitialize = {true}
            >
              {
                ()=>(
                  <Form>
                    <SelectField name='hour' placeholder='Seleccione la hora' label="Hora" options={HOURS}/>
                    <SelectField name='monday' placeholder='Seleccione un grupo' label="Lunes" options={GROUPS}/>
                    <SelectField name='tuesday' placeholder='Seleccione un grupo' label="Martes" options={GROUPS}/>
                    <SelectField name='wednesday' placeholder='Seleccione un grupo' label="Miércoles" options={GROUPS}/>
                    <SelectField name='thursday' placeholder='Seleccione un grupo' label="Jueves" options={GROUPS}/>
                    <SelectField name='friday' placeholder='Seleccione un grupo' label="Viernes" options={GROUPS}/>
                    <SelectField name='saturday' placeholder='Seleccione un grupo' label="Sábado" options={GROUPS}/>
                    
                    <HStack mt={5} justifyContent={'space-between'}>
                      <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant='ghost' type='submit'>Crear Horario</Button>
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
