import { deleteSchedule } from "@/api";
import { FEATURES, MESSAGES_NOTIFICATIONS } from "@/constants";
import { useToast } from "@chakra-ui/react";
import {  useMutation, useQueryClient } from "@tanstack/react-query"


export const useDeleteSchedule = () => {
    const queryClient = useQueryClient();  

    const toast = useToast();
  
    const { mutate } = useMutation({
      mutationFn: deleteSchedule,
      onSuccess: async()=>{
        toast({
          title: `${MESSAGES_NOTIFICATIONS.features.schedules.deleted}`,
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