import { Box } from "@chakra-ui/react"
import { FormLoan, TableLoans } from "../components"
import { useGetAllLoans } from "../hooks"
import { NewLoans } from "@/interfaces";
import { heads } from "../data";
import { orderLoans } from "@/helpers";

export const Loans = () => {
  const { data: loans } = useGetAllLoans();

  let getAllLoans: NewLoans[] = [];

  if(loans !== undefined) getAllLoans = loans;

  const orderGetAllLoans = orderLoans(getAllLoans)

  console.log("orderGetAllLoans", orderGetAllLoans)

  return (
    <Box
      minHeight={'90vh'}
      padding={4}
    >
      <Box>
        <FormLoan/>
      </Box>
      <TableLoans
        heads={heads}
        loans={getAllLoans}
      />
    </Box>
  )
}
