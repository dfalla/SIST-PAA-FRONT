import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { createSchedule } from '@/api';
import { FEATURES } from '@/constants';
export const useAddSchedule = () => {

    const queryClient = useQueryClient(); 
    
    const toast = useToast();
  
    const addSchedule = useMutation({
      mutationFn: createSchedule,
      
      onSuccess: async(resp) =>{
        toast({
          title: resp.msg ? `${resp.msg}` : `${resp.response.data.msg}`,
          status: resp.msg ? 'success' : 'error',
          duration: 1000,
          isClosable: true,
          position: 'top'
        })
        await queryClient.invalidateQueries({
          queryKey: [`${FEATURES.schedule}`],  
          refetchType: 'active',
        })
      },
      onError: (error)=>{
        console.log("error desde useAddSchedule", error)
      }
    })

    return {
      addSchedule,
    }
  }
  