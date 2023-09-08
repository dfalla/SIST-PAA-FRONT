import { Grid, GridItem, Box } from "@chakra-ui/react";
import { HEADS, useGetAllSchedules } from "..";

type SCHEDULE = {
  monday: string,
  tuesday: string,
  wednesday: string,
  thursday: string,
  friday: string,
  saturday: string,
}

const initialValuesSchedules: SCHEDULE = {
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '',
}

export const Schedules = () => {


  const { data: data5pm } = useGetAllSchedules('5pm');
  let newData5pm = initialValuesSchedules;
  
  
  if(data5pm !== undefined) {
    delete data5pm[0].id_schedule;
    newData5pm = {
      ...data5pm[0]
    }
  }

  const { data: data6pm } = useGetAllSchedules('6pm');

  let newData6pm = initialValuesSchedules;
  
  if(data6pm !== undefined) {
    delete data6pm[0].id_schedule;
    newData6pm = {
      ...data6pm[0]
    }
  }


  const { data: data7pm } = useGetAllSchedules('7pm');

  let newData7pm = initialValuesSchedules;
  
  if(data7pm !== undefined) {
    delete data7pm[0].id_schedule;
    newData7pm = {
      ...data7pm[0]
    }
  }
  const { data: data8pm } = useGetAllSchedules('8pm');

  let newData8pm = initialValuesSchedules;
  
  if(data8pm !== undefined) {
    delete data8pm[0].id_schedule;
    newData8pm = {
      ...data8pm[0]
    }
  }
  const { data: data9pm } = useGetAllSchedules('9pm');

  let newData9pm = initialValuesSchedules;
  
  if(data9pm !== undefined) {
    delete data9pm[0].id_schedule;
    newData9pm = {
      ...data9pm[0]
    }
  }
  const { data: data10pm } = useGetAllSchedules('10pm');

  let newData10pm = initialValuesSchedules;
  
  if(data10pm !== undefined) {
    delete data10pm[0].id_schedule;
    newData10pm = {
      ...data10pm[0]
    }
  }

  return (
    <Box margin={30}>
     <Grid templateColumns='repeat(7, 1fr)' gap={6}>
      {
        HEADS.map((element)=>(
          <GridItem 
            key={element} 
            w='100%' 
            h='10' 
            bg='black' 
            textAlign={'center'} 
            color={'white'}
            
          >
            {element}
          </GridItem>
        ))
      }
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>5 P.M</GridItem>
      {
        Object.values(newData5pm).map((schedule, index)=>(
          <GridItem key={index} w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>{schedule}</GridItem>
        ))
      }
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>6 P.M</GridItem>
      {
        Object.values(newData6pm).map((schedule, index)=>(
          <GridItem key={index} w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>{schedule}</GridItem>
        ))
      }
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>7 P.M</GridItem>
      {
        Object.values(newData7pm).map((schedule, index)=>(
          <GridItem key={index} w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>{schedule}</GridItem>
        ))
      }
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>8 P.M</GridItem>
      {
        Object.values(newData8pm).map((schedule, index)=>(
          <GridItem key={index} w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>{schedule}</GridItem>
        ))
      }
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>9 P.M</GridItem>
      {
        Object.values(newData9pm).map((schedule, index)=>(
          <GridItem key={index} w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>{schedule}</GridItem>
        ))
      }
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>10 P.M</GridItem>
      {
        Object.values(newData10pm).map((schedule, index)=>(
          <GridItem key={index} w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>{schedule}</GridItem>
        ))
      }
      
    </Grid>
    </Box>
  )
}
