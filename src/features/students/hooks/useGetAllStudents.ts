import { getStudents } from "@/api";
import { FEATURES } from "@/constants";
import { Filters } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";


export const useGetAllStudents = (filters?: Filters) => {
    const { data, isLoading, isError } = useQuery({ 
        queryKey: [`${FEATURES.students}`, {
          filters: filters
        }],
        queryFn: () => getStudents(filters),
      })
  return {
    data, 
    isLoading, 
    isError
  }
}