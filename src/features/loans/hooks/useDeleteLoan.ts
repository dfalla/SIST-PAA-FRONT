import { deleteLoan } from "@/api";
import { FEATURES } from "@/constants";
import { useToast } from "@chakra-ui/react";
import {  useMutation, useQueryClient } from "@tanstack/react-query"


export const useDeleteLoan = () => {
    const queryClient = useQueryClient();  

    const toast = useToast();
  
    const { mutate } = useMutation({
      mutationFn: deleteLoan,
      onSuccess: async(rsp)=>{
        console.log("response", rsp)
        toast({
          title: `${rsp.msg}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
        await queryClient.invalidateQueries({
          queryKey: [`${FEATURES.loans}`], 
          refetchType: 'active',
        })
      }
    })
    
    return {
      mutate
    }
  }