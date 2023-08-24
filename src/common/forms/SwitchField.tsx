import { useField, ErrorMessage } from "formik"
import { Box, FormControl, FormLabel, Text, Switch } from '@chakra-ui/react'
// import { useSales } from "@/context/SalesContext";
// import { useEffect } from "react";
import { SafeAny } from "..";

interface Props { 
    label: string;
    name: string;
    [x: string]: SafeAny;
}

export const SwitchField = ({ label, ...props }: Props) => {

  const [ field ] = useField(props);

  return (
    <FormControl>
      <FormLabel htmlFor={props.id || props.name} marginBottom={3} marginTop={5}>
        <Text fontWeight={'bold'}>
          {label}
        </Text>
      </FormLabel>
      <Switch id={props.id || props.name} {...props} {...field} />
      <Box
        color={'red'}
        marginTop={3}
      >
        <ErrorMessage name={ props.name }/>
      </Box>
    </FormControl>
  )
}