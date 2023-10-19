import { Box, SimpleGrid } from '@chakra-ui/react'
import { CardGroupStudent } from '..'

export const GroupsStudent = () => {
  return (
    <Box margin={5}>
      <SimpleGrid columns={[1, null, 3]} spacing='40px'>
          <CardGroupStudent levelName='G1NB' schedule='Lun - Mie - Vie / 5pm'/>
          <CardGroupStudent levelName='G2NB' schedule='Lun - Mie / 7pm - Sab / 5pm'/>
          <CardGroupStudent levelName='G3NB' schedule='Mar - Vie - Sab / 7pm'/>
          <CardGroupStudent levelName='G4NB' schedule='Lun - Mie - Vie / 8pm'/>
          <CardGroupStudent levelName='G5NB' schedule='Lun - Mie - Vie / 6pm'/>
          <CardGroupStudent levelName='GAB'  schedule='Lun - Mie - Vie / 10pm'/>
          <CardGroupStudent levelName='GI'   schedule='Mar - 8pm / Vie - 9pm / Sab - 8pm'/>
      </SimpleGrid>
    </Box>
  )
}
