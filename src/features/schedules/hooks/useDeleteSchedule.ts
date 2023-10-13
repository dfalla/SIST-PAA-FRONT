import { deleteSchedule } from "@/api";
import { FEATURES } from "@/constants";
import { useToast } from "@chakra-ui/react";
import {  useMutation, useQueryClient } from "@tanstack/react-query"


export const useDeleteSchedule = () => {
    const queryClient = useQueryClient();  

    const toast = useToast();
  
    const { mutate } = useMutation({
      mutationFn: deleteSchedule,
      onSuccess: async(resp)=>{
        toast({
          title: `${resp}`,
          status: 'success',
          duration: 1000,
          isClosable: true,
          position: 'top'
        })
        await queryClient.invalidateQueries({
          queryKey: [`${FEATURES.schedule}`], 
          refetchType: 'active',
        })
      }
    })
    
    return {
      mutate
    }
  }