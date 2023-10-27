import { FC } from 'react' 
import { 
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
  HStack,
  Heading,

} from "@chakra-ui/react"
import { NewLoans } from "@/interfaces";
import { DeleteModal } from '@/common';

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
          <TableCaption placement= 'top'>
            <Heading as='h3' size='lg'>
              Ganancia total: S/.{ganancy} y el capital total invertido es: S/.{totalCapital}
            </Heading>
            </TableCaption>
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
                    <Td>
                      <HStack gap={0} justifyContent={'space-between'}>
                        <Box> { payment_date } </Box>
                        <Box>  
                          <DeleteModal
                            color = {'red'}
                            deleteIdentification = {'loan'}
                            msg = {'¿Desea eliminar el préstamo?'}
                            icon = {true}
                            text = {'Eliminar Préstamo'}
                            element_id={loan_id}
                          /> 
                        </Box>
                      </HStack>
                       
                      
                     
                    </Td>
                  </Tr>
                ))
              }
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
