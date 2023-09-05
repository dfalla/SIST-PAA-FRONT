import { Grid, GridItem, Box } from "@chakra-ui/react";

const HEADS: string[] = [
  'HORA',
  'LUNES',
  'MARTES',
  'MIÉRCOLES',
  'JUEVES',
  'VIERNES',
  'SÁBADO'
]

export const Schedules = () => {

  
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
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>6 P.M</GridItem>
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>7 P.M</GridItem>
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>8 P.M</GridItem>
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>9 P.M</GridItem>
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' textAlign={'center'} color={'white'}>10 P.M</GridItem>
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      <GridItem w='100%' h='10' bg='blue.500' />
      
    </Grid>
    </Box>
  )
}
