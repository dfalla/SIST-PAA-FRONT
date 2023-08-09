import { useField, ErrorMessage } from "formik"
import { Box, FormControl, FormLabel, Select, Text } from '@chakra-ui/react'
import { SafeAny } from "..";

interface Props { 
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: SafeAny;
}

export const SelectField = ({ label, ...props }: Props) => {

    const [ field ] = useField(props);

  return (
    <FormControl >
      <FormLabel htmlFor={props.id || props.name} marginBottom={3} marginTop={5}>
        <Text fontWeight={'bold'}>
          {label}
        </Text>
      </FormLabel>
      <Select {...field} {...props}/>
      <Box
        color={'red'}
        marginTop={3}
      >
        <ErrorMessage name={ props.name }/>
      </Box>
        
    </FormControl>
  )
}