import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { createStudent } from '@/api';
import { FEATURES } from '@/constants';
export const useAddStudent = () => {

    const queryClient = useQueryClient(); 
    
    const toast = useToast();
  
    const addStudent = useMutation({
      mutationFn: createStudent,
      onSuccess: async(resp) =>{
        toast({
          title: resp.msg ? `${resp.msg}` : `${resp.response.data.msg}`,
          status: resp.msg ? 'success' : 'error',
          duration: 1000,
          isClosable: true,
          position: 'top'
        })
        await queryClient.invalidateQueries({
          queryKey: [`${FEATURES.students}`],  
          refetchType: 'active',
        })
      },
      onError: (error)=>{
        console.log("error desde useAddStudent", error)
      }
    })

    return {
      addStudent,
    }
  }
  