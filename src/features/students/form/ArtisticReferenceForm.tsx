import {
    VStack,
    Heading,
    HStack,
} from '@chakra-ui/react';
import { InputField, SelectField, SwitchField } from '@/common';
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



export const ArtisticReference = ({isChecked}: {isChecked:boolean})=> {
    return(
        <VStack gap={3}>
        <Heading width={'100%'} textAlign={'center'} fontWeight={'normal'} mb="2%">
            Referencia Artística
        </Heading>
            <SelectField name='category' label="Selecciona una opción" options={optionsCategory}/>
            <SelectField name='level' label="Selecciona una opción" options={optionsLevel}/>
            <HStack justifyContent={"space-between"} alignItems={'flex-start'} alignSelf={'flex-start'}>
                <InputField
                    name='amount_payable'
                    label='Monto a pagar'
                    type='number'
                    variant={'filled'}
                />
                <SwitchField
                    name='active'
                    label='Activo'
                    defaultChecked={ isChecked }
                />
            </HStack>
        </VStack>
    )
}