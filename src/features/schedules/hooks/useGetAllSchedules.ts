import { getSchedules } from "@/api";
import { FEATURES } from "@/constants";
import { useQuery } from "@tanstack/react-query";


export const useGetAllSchedules = (filter?: string) => {
    const { data, isLoading, isError } = useQuery({ 
        queryKey: [`${FEATURES.schedule}`, {
          filters: filter
        }],
        queryFn: () => getSchedules(filter!),
      })
  return {
    data, 
    isLoading, 
    isError
  }
}