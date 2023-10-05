import { Box, SimpleGrid } from '@chakra-ui/react'
import { CardGroupStudent } from '..'

export const GroupsStudent = () => {
  return (
    <Box margin={5}>
      <SimpleGrid columns={[1, null, 3]} spacing='40px'>
          <CardGroupStudent name='G1NB' />
          <CardGroupStudent name='G2NB' />
          <CardGroupStudent name='G3NB' />
          <CardGroupStudent name='G4NB' />
          <CardGroupStudent name='GAB'  />
          <CardGroupStudent name='GI'   />
      </SimpleGrid>
    </Box>
  )
}
