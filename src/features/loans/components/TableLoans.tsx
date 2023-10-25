import { FC } from 'react' 
import { 
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,

} from "@chakra-ui/react"
import { NewLoans } from "@/interfaces";



interface TableLoansProps {
  heads: string[];
  loans: NewLoans[];
}

export const TableLoans: FC<TableLoansProps> = ({ heads, loans }) => {
  let ganancy: number = 0;
  let totalCapital: number = 0;
  ganancy = loans.reduce((acumulator: number, element: NewLoans) => acumulator + element.interest, 0)

  totalCapital = loans.reduce((acumulator: number, element: NewLoans) => acumulator + element.capital, 0)

  return (
    <Box
      marginTop={5}
    >
      <TableContainer>
        <Table size='sm'>
          <TableCaption placement= 'top'>Ganancia total: S/.{ganancy} y el capital total invertido es: S/.{totalCapital}</TableCaption>
          <Thead>
            <Tr>
              {
                heads.map((head, index)=>(
                  <Th key={index}>{ head }</Th>
                ))
              }
            </Tr>
          </Thead>
          <Tbody>
              {
                loans.map(({ capital, last_name, money_delivery_date, name, interest, payment_date, loan_id })=>(
                  <Tr key={loan_id}>
                    <Td>{ name }</Td>
                    <Td>{ last_name }</Td>
                    <Td>{ capital }</Td>
                    <Td>{ interest }</Td>
                    <Td>{ money_delivery_date }</Td>
                    <Td>{ payment_date }</Td>
                  </Tr>
                ))
              }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
