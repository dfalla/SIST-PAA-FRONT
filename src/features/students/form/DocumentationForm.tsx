import { FC } from 'react';
import {
    VStack,
    HStack,
    Heading,
} from '@chakra-ui/react';
import { OptionsProps, STUDENT } from '../interfaces';
import { InputField, SelectField } from '@/common';

interface PropsDocumentation{
    values: STUDENT
}

const optionsDocumentation: OptionsProps[] = [
    {
        label: 'DNI',
        value: 'dni'
    },
    {
        label: 'Carnet de Extranjería',
        value: 'ce'
    },
]

export const DocumentationForm:FC<PropsDocumentation> = ({values}) => {
    return(
        <VStack gap={3}>
            <Heading width={'100%'} textAlign={'center'} fontWeight={'normal'} mb="2%">
                Documentación
            </Heading>
            <HStack>
                
                <SelectField name='type_document' label="Doc. de identidad" options={optionsDocumentation}/>
               
                <InputField
                    name='document_number'
                    label='Número de documento'
                    type='text'
                    variant={'filled'}
                    disabled={ !values.type_document }
                />
            </HStack>
            <InputField
                name='age'
                label='Edad'
                type='number'
                variant={'filled'}
            />
            <InputField
                name='date_admission'
                label='Fecha de ingreso'
                type='date'
            />
        </VStack>
    )
}