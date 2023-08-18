import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';

export interface CardArgs{
  id_student?: string;
  name: string;
  last_name: string;
  mother_last_name: string;
  image: string;
}

export const CardStudent = ({image, last_name, mother_last_name, name}: CardArgs) => {
  return (
    <Box
      role={'group'}
      marginTop={10}
      p={6}
      maxW={'330px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}>
      <Box
        rounded={'lg'}
        mt={-12}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}
      >
        <Image
          rounded={'lg'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={image}
        />
      </Box>
      <Stack spacing={0} align={'center'} mb={5} mt={5}>
        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
          {name}
        </Heading>
        <Text color={'gray.500'}>{`${last_name} ${mother_last_name}`}</Text>
      </Stack>
      <Stack mt={8} direction={'row'} spacing={4}>
        <Button
        //   onClick={() => editProduct(id_student, variant)}
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'brand.clonika.blue.800'}
          color={'white'}
          boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'brand.clonika.blue.700',
          }}
        >
          Editar
        </Button>
        <Button 
          onClick={()=>{
            // deleteItem(id_student)
          }}
          colorScheme='red'
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
        >
          Eliminar 
        </Button>
      </Stack>
    </Box>
  )
}