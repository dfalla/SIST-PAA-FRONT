import { useField, ErrorMessage } from "formik"
import { Box, FormControl, FormLabel, Select, Text } from '@chakra-ui/react'
import { SafeAny } from "..";

interface Props { 
    label: string;
    name: string;
    placeholder?: string;
    options: { value: string; label: string }[];
    [x: string]: SafeAny;
}

export const SelectField = ({ label, options, ...props }: Props) => {

    const [ field ] = useField(props);

  return (
    <FormControl >
      <FormLabel htmlFor={props.id || props.name} marginBottom={3} marginTop={5}>
        <Text fontWeight={'bold'}>
          {label}
        </Text>
      </FormLabel>
      <Select id={props.name} {...field} {...props} placeholder={`Selecciona una opción`}>
        <option value="">Seleccione</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Box
        color={'red'}
        marginTop={3}
      >
        <ErrorMessage name={ props.name }/>
      </Box>
        
    </FormControl>
  )
}