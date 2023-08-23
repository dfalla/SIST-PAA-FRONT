import { InputField, SafeAny } from '@/common';
import {
    VStack,
    HStack,
    Input,
    Text,
    Heading,
} from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { STUDENT } from '../interfaces';
import { FC } from 'react';

interface PropsPersonalInformation {
    setFieldValue: (field: string, value: SafeAny, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<STUDENT>>
}

export const PersonalInformationForm: FC<PropsPersonalInformation> = ({setFieldValue}) => {
    return(
        <VStack gap={3} alignItems={'flex-start'}>
            <Heading width={'100%'} textAlign={'center'} fontWeight={'normal'} mb="2%">
                Información Personal
            </Heading>
            
            <HStack>
                <InputField
                    name='name'
                    label='Nombre'
                    type='text'
                    variant={'filled'}
                />
            
                <InputField
                    name='phone_number'
                    label='Teléfono'
                    type='number'
                    variant={'filled'}
                />
            </HStack>

            <InputField
                name='last_name'
                label='Apellido Paterno'
                type='text'
                variant={'filled'}
            />
    
            <InputField
                name='mother_last_name'
                label='Apellido Materno'
                type='text'
                variant={'filled'}
            />

            <InputField
                name='address'
                label='Domicilio'
                type='text'
                variant={'filled'}
            />
            <Text fontWeight={'bold'}>
                Foto
            </Text>

            <Input
                name='image'
                onChange={(e: SafeAny)=>setFieldValue('image', e.target.files[0])}
                type='file'
            />
                
        </VStack>
    )
}

