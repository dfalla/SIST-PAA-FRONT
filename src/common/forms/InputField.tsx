import { useField, ErrorMessage } from "formik"
import { Box, Input, FormControl, FormLabel, Text } from '@chakra-ui/react'
// import { useSales } from "@/context/SalesContext";
// import { useEffect } from "react";
import { SafeAny } from "..";

interface Props { 
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'date';
    placeholder?: string;
    [x: string]: SafeAny;
}

export const InputField = ({ label, ...props }: Props) => {

  const [ field ] = useField(props);

  // const { calculateCantidad } = useSales();

  // useEffect(() => {
  //   if(field.name === 'cantidad'){
  //     calculateCantidad(field.value);
  //   }
  // }, [field]);

  return (
    <FormControl>
      <FormLabel htmlFor={props.id || props.name} marginBottom={3} marginTop={5}>
        <Text fontWeight={'bold'}>
          {label}
        </Text>
      </FormLabel>
      <Input className="input-text" type="text" {...field} {...props}/>
      <Box
        color={'red'}
        marginTop={3}
      >
        <ErrorMessage name={ props.name }/>
      </Box>
    </FormControl>
  )
}