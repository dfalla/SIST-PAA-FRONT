import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { geScheduleById, updateSchedule } from "@/api";
import { FEATURES } from "@/constants";

export const useEditSchedule = ({parameter}: {parameter: string, edit?: boolean}) => {

    const queryClient = useQueryClient(); 
    const toast = useToast();

    const { data } = useQuery({
      queryKey: [`${FEATURES.schedule}`, parameter],
      queryFn:  parameter ? () => geScheduleById(parameter): undefined,
    })
  
    const editSchedule = useMutation({
      mutationFn: updateSchedule,
      onSuccess: async(data) =>{
        queryClient.setQueryData([`${FEATURES.schedule}`, { id: parameter }], data)
        toast({
          title: `${data}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
        await queryClient.invalidateQueries({
          queryKey: [`${FEATURES.schedule}`], 
          refetchType: 'active',
        })
        
      },
      onError: (error) =>{
        console.log(error)
      }
    })
  
    return {
      data,
  
      editSchedule
    }
  }