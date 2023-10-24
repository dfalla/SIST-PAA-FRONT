import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { FEATURES } from '@/constants';
import { createLoan } from "@/api";
export const useAddLoan = () => {

    const queryClient = useQueryClient(); 
    
    const toast = useToast();
  
    const addLoan = useMutation({
      mutationFn: createLoan,
      onSuccess: async(resp) =>{
        toast({
          title: resp.msg ? `${resp.msg}` : `${resp.response.data.msg}`,
          status: resp.msg ? 'success' : 'error',
          duration: 1000,
          isClosable: true,
          position: 'top'
        })
        await queryClient.invalidateQueries({
          queryKey: [`${FEATURES.loans}`],  
          refetchType: 'active',
        })
      },
      onError: (error)=>{
        console.log("error desde useAddLoan", error)
      }
    })

    return {
        addLoan,
    }
  }
  