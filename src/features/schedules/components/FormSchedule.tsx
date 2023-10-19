import { useState, FC, useEffect, useCallback } from 'react';

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
import { INITIALVALUES, ScheduleValidationSchema } from '../domain';
import { GROUPS, HOURS, useAddSchedule, useEditSchedule } from '..';
import { SelectField } from '@/common';
import { useNavigate, useParams } from 'react-router-dom';

type Props = {
  edit? : boolean
}


export const FormSchedule: FC<Props> = ({edit}) => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { addSchedule } = useAddSchedule();
    const { id_schedule } = useParams();
    const navigate = useNavigate();

    const { data, editSchedule} = useEditSchedule({ parameter: id_schedule!})


    const [initialValues, setInitialValues] = useState<Schedule>(INITIALVALUES); 

    const closeModal = useCallback(() => {
      onClose();
      navigate('/schedules')
  }, [onClose, navigate])

    useEffect(() => {
      if(edit && id_schedule){
          onOpen()
      }
    }, [id_schedule, edit, onOpen]);

    useEffect(() => { 
      if(isOpen === false) closeModal();
  }, [isOpen]);

    useEffect(() => {
      if(!id_schedule) closeModal();
  }, [id_schedule, closeModal]);

    useEffect(() => {
      if(data !== undefined){
        setInitialValues({
              hour: data.hour,
              monday: data.monday,
              tuesday: data.tuesday,
              wednesday: data.wednesday,
              thursday: data.thursday,
              friday: data.friday,
              saturday: data.saturday
            })
      } else {
        setInitialValues(INITIALVALUES)
      }
  }, [data]);

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
            { id_schedule ? 'Editar ' : 'Crear ' }
              Horario
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={initialValues}
              onSubmit={(values)=>{
                if(!id_schedule && !edit){
                  addSchedule.mutate(values)
                }

                if((id_schedule !== undefined && edit === true)){
                  editSchedule.mutate({id_schedule: id_schedule!, values})
              }
                closeModal();
              }}
              enableReinitialize = {true}
              validationSchema={ScheduleValidationSchema}
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
                        Cerrar
                      </Button>
                      <Button variant='ghost' type='submit'>
                        { id_schedule ? 'Editar ' : 'Crear ' } Horario
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
