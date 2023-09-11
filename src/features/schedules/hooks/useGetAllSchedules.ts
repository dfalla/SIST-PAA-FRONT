import { getSchedules } from "@/api";
import { FEATURES } from "@/constants";
import { useQuery } from "@tanstack/react-query";


export const useGetAllSchedules = () => {
    const { data, isLoading, isError } = useQuery({ 
        queryKey: [`${FEATURES.schedule}`],
        queryFn: getSchedules,
      })
  return {
    data, 
    isLoading, 
    isError
  }
}