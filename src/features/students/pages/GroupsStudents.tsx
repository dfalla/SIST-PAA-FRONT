import { Box, SimpleGrid } from '@chakra-ui/react'
import { CardGroupStudent } from '..'

export const GroupsStudent = () => {
  return (
    <Box margin={5}>
      <SimpleGrid columns={[1, null, 3]} spacing='40px'>
          <CardGroupStudent levelName='G1NB' />
          <CardGroupStudent levelName='G2NB' />
          <CardGroupStudent levelName='G3NB' />
          <CardGroupStudent levelName='G4NB' />
          <CardGroupStudent levelName='G5NB' />
          <CardGroupStudent levelName='GAB'  />
          <CardGroupStudent levelName='GI'   />
      </SimpleGrid>
    </Box>
  )
}
