import {
    VStack,
    Heading,
    HStack,
} from '@chakra-ui/react';
import { InputField, SelectField, SwitchField } from '@/common';
import { optionsCategory, optionsGroupLevels, optionsLevel } from '..';

export const ArtisticReference = ({isChecked}: {isChecked:string | boolean})=> {
    return(
        <VStack gap={3}>
        <Heading width={'100%'} textAlign={'center'} fontWeight={'normal'} mb="2%">
            Referencia Artística
        </Heading>
            <SelectField name='category' placeholder= 'Seleccione' label="Categoría" options={optionsCategory}/>
            <SelectField name='level' placeholder= 'Seleccione' label="Nivel" options={optionsLevel}/>
            <SelectField name='group_level' placeholder= 'Seleccione' label="Grupo" options={optionsGroupLevels}/>
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