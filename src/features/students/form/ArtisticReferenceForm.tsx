import {
    VStack,
    Heading,
} from '@chakra-ui/react';
import { InputField, SelectField } from '@/common';
import { OptionsProps } from "../interfaces"

const optionsCategory: OptionsProps[] = [
    {
        label: 'Niños',
        value: 'nino'
    },
    {
        label: 'Jóvenes',
        value: 'joven'
    },
    {
        label: 'Adultos',
        value: 'adulto'
    },
]

const optionsLevel: OptionsProps[] = [
    {
        label: 'Básico',
        value: 'basico'
    },
    {
        label: 'Intermedio',
        value: 'intermedio'
    },
    {
        label: 'Avanzado',
        value: 'avanzado'
    },
]



export const ArtisticReference =()=> {
    return(
        <VStack gap={3}>
        <Heading width={'100%'} textAlign={'center'} fontWeight={'normal'} mb="2%">
            Referencia Artística
        </Heading>
            <SelectField name='category' label="Selecciona una opción" options={optionsCategory}/>
            <SelectField name='level' label="Selecciona una opción" options={optionsLevel}/>
            <InputField
                name='amount_payable'
                label='Monto a pagar'
                type='number'
                variant={'filled'}
            />
        </VStack>
    )
}