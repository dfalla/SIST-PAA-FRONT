import { FC } from 'react';
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
import { FormSchedule, HEADS, useDeleteSchedule, useGetAllSchedules } from "..";

type SCHEDULE = {
  schedule_id: string;
  hour: number;
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
}

type Props = {
  edit? : boolean
}

export const Schedules: FC<Props> = ({edit}) => {

  const { data: schedules } = useGetAllSchedules();
  const { mutate } = useDeleteSchedule()

  if(schedules !== undefined) {

    const dataOrdered = schedules.sort((a:SCHEDULE , b: SCHEDULE)=> a.hour - b.hour)
  
    console.log("dataOrdered", dataOrdered);

  }


  const deleteSchedule = (schedule_id: string) => {
    mutate(schedule_id);
  }


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
                <FormSchedule edit={ edit }/>
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
                schedules !== undefined && schedules.sort((a:SCHEDULE , b: SCHEDULE)=> a.hour - b.hour).map(({ 
                  schedule_id,
                  hour,
                  monday,
                  tuesday,
                  wednesday,
                  thursday,
                  friday,
                  saturday
                 }: SCHEDULE)=>(
                  <Tr key={schedule_id}>
                    <Td>{hour}.p.m</Td>
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
                          onClick={()=>deleteSchedule(schedule_id)}
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
