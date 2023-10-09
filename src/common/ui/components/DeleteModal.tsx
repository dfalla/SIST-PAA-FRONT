import { FC } from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
} from '@chakra-ui/react'
import { LiaTrashSolid } from "react-icons/lia";
import { useDeleteStudent } from '@/features/students/hooks';

interface Props {
    icon?            : boolean;
    student_id       : string;
    msg              : string;
    name             : string;
    text             : string;
    last_name        : string;
    mother_last_name : string;
    color            : string;
}


export const DeleteModal: FC<Props> = ({ last_name, mother_last_name, name, msg, color, student_id, text, icon }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { mutate } = useDeleteStudent();
    const deleteStudent =(student_id: string)=> {
        mutate(student_id)
    }
    return (
      <>

      {
        icon ? 
          (<IconButton
            onClick={onOpen} 
            color={'red'} 
            _hover={{
                cursor: 'pointer'
            }}
            aria-label='delete student'
            icon={<LiaTrashSolid fontSize={25}/>} 
          />) : 
          (
            <Button 
              onClick={onOpen} 
              color={'white'}
              colorScheme={color}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
          > 
            Eliminar 
          </Button>
          )
      }
        
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{ text }</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                { `${ msg } ${ name } ${ last_name } ${ mother_last_name }` }
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                 Cerrar
                </Button>
                <Button 
                    onClick={()=>{ deleteStudent(student_id) }}
                    variant='ghost' 
                >
                 Eliminar
                </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
