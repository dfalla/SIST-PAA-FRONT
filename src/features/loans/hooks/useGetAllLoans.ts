import { getAllLoans } from "@/api";
import { FEATURES } from "@/constants";
import { FltersLoan } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";


export const useGetAllLoans = (filters?: FltersLoan) => {
    const { data, isLoading, isError } = useQuery({ 
        queryKey: [`${FEATURES.loans}`, {
          filters: filters
        }],
        queryFn: () => getAllLoans(filters),
      })
  return {
    data, 
    isLoading, 
    isError
  }
}