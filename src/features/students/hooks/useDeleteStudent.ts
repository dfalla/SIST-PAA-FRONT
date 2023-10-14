import { deleteStudent } from "@/api";
import { FEATURES, MESSAGES_NOTIFICATIONS } from "@/constants";
import { useToast } from "@chakra-ui/react";
import {  useMutation, useQueryClient } from "@tanstack/react-query"


export const useDeleteStudent = () => {
    const queryClient = useQueryClient();  

    const toast = useToast();
  
    const { mutate } = useMutation({
      mutationFn: deleteStudent,
      onSuccess: async()=>{
        toast({
          title: `${MESSAGES_NOTIFICATIONS.features.students.deleted}`,
          status: 'success',
          duration: 3000,
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
      mutate
    }
  }