import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  HStack,
  TableCaption,
} from '@chakra-ui/react'
import { FormSchedule, HEADS, useGetAllSchedules } from "..";

type SCHEDULE = {
  id_schedule: string;
  hour: string;
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
}

export const Schedules = () => {
  const { data: schedules } = useGetAllSchedules();

  return (
    <Box margin={30}>
     <TableContainer>
        <Table variant='striped' colorScheme='teal' size={'md'}>
          <TableCaption placement='top' pl={0} >
            <HStack
              justifyContent={'space-between'}
            >
              <Box
              >
                <FormSchedule/>
              </Box>
              <Box>Horario de ensayos 2023</Box>
              <Box></Box>
            </HStack>
          </TableCaption>
          <Thead>
            <Tr>
              {
                HEADS.map((head, index)=>(
                  <Th key={index} bg={'black'} color={'white'}>{head}</Th>
                ))
              }
            </Tr>
          </Thead>
          <Tbody>
              {
                schedules !== undefined && schedules.map(({ 
                  id_schedule,
                  hour,
                  monday,
                  tuesday,
                  wednesday,
                  thursday,
                  friday,
                  saturday
                 }: SCHEDULE)=>(
                  <Tr key={id_schedule}>
                    <Td>{hour}</Td>
                    <Td>{monday}</Td>
                    <Td>{tuesday}</Td>
                    <Td>{wednesday}</Td>
                    <Td>{thursday}</Td>
                    <Td>{friday}</Td>
                    <Td>{saturday}</Td>
                    <Td>
                      <HStack
                        gap={2}
                        justifyContent={'center'}
                      >
                        <Button
                          bg={'blue'}
                        >
                          Editar
                        </Button>
                        <Button
                          bg={'red'}
                        >
                          Eliminar
                        </Button>
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
