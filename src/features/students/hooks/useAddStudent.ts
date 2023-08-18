import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { createStudent } from '@/api';
import { FEATURES, MESSAGES_NOTIFICATIONS } from '@/constants';
export const useAddStudent = () => {

    const queryClient = useQueryClient(); 
    
    const toast = useToast();
  
    const addProduct = useMutation({
      mutationFn: createStudent,
      onSuccess: async() =>{
        toast({
          title: `${MESSAGES_NOTIFICATIONS.registred}`,
          status: 'success',
          duration: 1000,
          isClosable: true,
          position: 'top'
        })
        await queryClient.invalidateQueries({
            queryKey: [`${FEATURES.students}`],  
          refetchType: 'active',
        })
      }
    })
  
    return {
      addProduct,
    }
  }
  