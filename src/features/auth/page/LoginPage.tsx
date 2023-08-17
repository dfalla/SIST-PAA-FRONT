import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Checkbox,
  Flex,
  Text,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react'
import { InitialValues } from '@/interfaces';
import { loginRquest } from '@/utilities';
import { InputField } from '@/common'
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store';

const initialValues: InitialValues = {
  username: '',
  password: ''
}

const validationSchema = Yup.object({
  username: Yup.string().required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido')
})

export const LoginPage = ()=> {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={"white"}>
      <Flex flex={1}>
      <Image
        alt={'Login Image'}
        display={{ base: 'none', md:'block' }}
        objectFit={'cover'}
        src={
          'https://res.cloudinary.com/dlbsdgti4/image/upload/v1690913513/students/logo_uumjsi.jpg'
        }
      />
      </Flex>
      <Formik
        initialValues={initialValues}

        onSubmit={ async ({username, password}: InitialValues)=>{
          
          const profile = await loginRquest({username, password})

          setToken(profile.token)
          setProfile({name: profile.name, lastName: profile.lastName})
          
          navigate("/");

        }}
        
        validationSchema={validationSchema}
      >

        {
          ()=>(
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'} textAlign={'center'}>Pañuelos al Aire</Heading>
                <Form>
                  <InputField
                      label='Username'
                      name='username'
                      placeholder='DFalla'
                      type='text'
                  />
                  <InputField
                    label='Contraseña'
                    type='password'
                    name='password'
                    placeholder='***********'
                  />
                  <Stack spacing={6}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}
                      >
                      <Checkbox>Remember me</Checkbox>
                      <Text color={'blue.500'}>Forgot password?</Text>
                    </Stack>
                    <Button 
                      colorScheme={'blue'} 
                      variant={'solid'}
                      type='submit'
                    >
                        Entrar
                    </Button>
                  </Stack>
                </Form>
              </Stack>
            </Flex>
          )
        }
      </Formik>
    </Stack>
  )
}