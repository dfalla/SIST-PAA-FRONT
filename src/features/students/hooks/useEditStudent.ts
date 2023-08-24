import { QueryFunction, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { geStudentById, updateStudent } from "@/api";
import { FEATURES, MESSAGES_NOTIFICATIONS } from "@/constants";
import { SafeAny } from "@/common";

export const useEditStudent = ({parameter}: {parameter: string, edit?: boolean}) => {

    const queryClient = useQueryClient(); 
    const toast = useToast();

    // let getProductById:  QueryFunction<SafeAny, (string | undefined)[]> | undefined;


    // if(parameter && edit === true){
    //   getProductById = () => geStudentById(parameter)
    // }
  
    const { data } = useQuery({
      queryKey: [`${FEATURES.students}`, parameter],
      queryFn:  () => geStudentById(parameter),
    })

  
    const editStudent = useMutation({
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
  
      editStudent
    }
  }