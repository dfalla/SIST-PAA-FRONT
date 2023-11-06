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
import { useDeleteLoan } from '@/features';

interface Props {
    icon?                    : boolean;
    deleteIdentification     : string;
    element_id               : string;
    msg                      : string;
    name?                    : string;
    text                     : string;
    last_name?               : string;
    mother_last_name?        : string;
    color                    : string;
}


export const DeleteModal: FC<Props> = ({ last_name, mother_last_name, name, msg, color, element_id, text, icon, deleteIdentification }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { mutate: StudentMutate } = useDeleteStudent();
    const { mutate: LoanMutate } = useDeleteLoan()

    const deleteData =(id: string)=> {
      if( deleteIdentification === 'student' ) StudentMutate(id)
      if( deleteIdentification === 'loan' ) LoanMutate(id)
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
            aria-label='delete'
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
                { `${ msg } ${ name ? name : '' } ${ last_name ? last_name : ''} ${ mother_last_name ? mother_last_name : '' }` }
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                 Cerrar
                </Button>
                <Button 
                    onClick={()=>{ deleteData(element_id) }}
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
