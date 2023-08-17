import { getStudents } from "@/api";
import { FEATURES } from "@/constants";
import { useQuery} from "@tanstack/react-query";


export const useGetAllStudents = () => {
    const { data, isLoading, isError } = useQuery({ 
        queryKey: [`${FEATURES.students}`], 
        queryFn: getStudents,
      })
  return {
    data, 
    isLoading, 
    isError
  }
}