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
import { useNavigate } from 'react-router-dom';
import { GROUPSCOLORS } from '@/constants';

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
  const navigate = useNavigate();

  const deleteSchedule = (schedule_id: string) => {
    mutate(schedule_id);
  }

  const editSchedule = (schedule_id: string) => {
    navigate(`/schedules/${schedule_id}`)
  }

  const defineColor = (value: string) => {
    if(value === GROUPSCOLORS.G1NB.GROUP) return GROUPSCOLORS.G1NB.COLOR;
    if(value === GROUPSCOLORS.G2NB.GROUP) return GROUPSCOLORS.G2NB.COLOR;
    if(value === GROUPSCOLORS.G3NB.GROUP) return GROUPSCOLORS.G3NB.COLOR;
    if(value === GROUPSCOLORS.G4NB.GROUP) return GROUPSCOLORS.G4NB.COLOR;
    if(value === GROUPSCOLORS.G5NB.GROUP) return GROUPSCOLORS.G5NB.COLOR;
    if(value === GROUPSCOLORS.GAB.GROUP) return GROUPSCOLORS.GAB.COLOR;
    if(value === GROUPSCOLORS.GI.GROUP) return GROUPSCOLORS.GI.COLOR;
  }


  return (
    <Box margin={30}>
     <TableContainer>
        <Table colorScheme='teal' size={'md'}>
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
                    <Td bg={defineColor(monday)} color={'white'}>{monday}</Td>
                    <Td bg={defineColor(tuesday)} color={'white'}>{tuesday}</Td>
                    <Td bg={defineColor(wednesday)} color={'white'}>{wednesday}</Td>
                    <Td bg={defineColor(thursday)} color={'white'}>{thursday}</Td>
                    <Td bg={defineColor(friday)} color={'white'}>{friday}</Td>
                    <Td bg={defineColor(saturday)} color={'white'}>{saturday}</Td>
                    <Td>
                      <HStack
                        gap={2}
                        justifyContent={'center'}
                      >
                        <Button
                          bg={'blue'}
                          onClick={()=>editSchedule(schedule_id)}
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
