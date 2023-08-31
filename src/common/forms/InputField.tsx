import { useField, ErrorMessage } from "formik"
import { Box, Input, FormControl, FormLabel, Text } from '@chakra-ui/react'
// import { useSales } from "@/context/SalesContext";
// import { useEffect } from "react";
import { SafeAny } from "..";

interface Props { 
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'file';
    placeholder?: string;
    [x: string]: SafeAny;
}

export const InputField = ({ label, ...props  }: Props) => {

  const [ field ] = useField(props);

  return (
    <FormControl>
      <FormLabel htmlFor={props.id || props.name} >
        <Text fontWeight={'bold'}>
          {label}
        </Text>
        <Input className="input-text" type="text" {...field} {...props}/>
      </FormLabel>
      <Box
        color={'red'}
      >
        <ErrorMessage name={ props.name }/>
      </Box>
    </FormControl>
  )
}