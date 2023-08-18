import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { geStudentById, updateStudent } from "@/api";
import { FEATURES, MESSAGES_NOTIFICATIONS } from "@/constants";

export const useEditStudent = ({parameter}: {parameter: string}) => {

    
    const queryClient = useQueryClient(); 
    const toast = useToast();
  
  
    const { data } = useQuery({
      queryKey: [`${FEATURES.students}`, parameter],
      queryFn: () => geStudentById(parameter),
    })
  
    const editProduct = useMutation({
      mutationFn: updateStudent,
      onSuccess: async() =>{
  
        toast({
          title: `${MESSAGES_NOTIFICATIONS.edited}`,
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
  
      editProduct
    }
  }