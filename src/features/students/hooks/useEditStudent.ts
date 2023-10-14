import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { geStudentById, updateStudent } from "@/api";
import { FEATURES, MESSAGES_NOTIFICATIONS } from "@/constants";

export const useEditStudent = ({parameter}: {parameter: string, edit?: boolean}) => {

    const queryClient = useQueryClient(); 
    const toast = useToast();

    const { data } = useQuery({
      queryKey: [`${FEATURES.students}`, parameter],
      queryFn:  parameter ? () => geStudentById(parameter): undefined,
    })
  
    const editStudent = useMutation({
      mutationFn: updateStudent,
      onSuccess: async(data) =>{
        queryClient.setQueryData([`${FEATURES.students}`, { id: parameter }], data)
        toast({
          title: `${MESSAGES_NOTIFICATIONS.features.students.edited}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
        await queryClient.invalidateQueries({
          queryKey: [`${FEATURES.students}`],
          refetchType: 'active',
        })
        
      },
      onError: (error) =>{
        console.log(error)
      }
    })
  
    return {
      data,
  
      editStudent
    }
  }