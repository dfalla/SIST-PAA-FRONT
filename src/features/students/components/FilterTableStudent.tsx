import {  useRef, useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    VStack,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { optionsCategory, optionsGroupLevels, optionsLevel } from '..';
import { InputField, SelectField, SwitchField } from '@/common';
import moment from 'moment';
import { convertStringTrueOrFalse } from '@/helpers';
import { useAppContext } from '@/context';


interface FilterArgsState{
    date_admission: string;
    category: string;
    level: string;
    group_level: string;
    active: boolean | string;
}


const initialValues: FilterArgsState = {
    date_admission: '',
    category: '',
    level: '',
    group_level: '',
    active: true,
}

export const FilterTableStudent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { setFilters } = useAppContext();

    const firstField = useRef()

    const [filterValues, setFilterValues] = useState<FilterArgsState>(initialValues);

    const handleFilterChange = (values: FilterArgsState) => {
        setFilterValues(values);
        handleFilter(values);
    };
  
    const handleFilter = (valuesFilter: FilterArgsState) => {


        if(valuesFilter.date_admission.length > 0){
            valuesFilter.date_admission = moment(valuesFilter.date_admission, "YYYY-MM-DD").format("DD/MM/YYYY");
        } 

        valuesFilter.active = convertStringTrueOrFalse(valuesFilter.active)!;


        setFilters(valuesFilter);

        
        onClose();
    };

    // useEffect(() => {
    //     setFilteredData(data);
    // }, [data, setFilteredData]);
  
    return (
        <>
        <Button 
            leftIcon={<AiOutlineSearch color="gray.300" />} 
            colorScheme='whatsapp' 
            variant={'outline'}
            onClick={onOpen} 
        >
            Filtro
        </Button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
                Datos a filtrar
            </DrawerHeader>
                <Formik
                    initialValues={initialValues}
                    onSubmit={
                        (values)=> {
                            handleFilterChange(values);
                        }
                    }
                >
                    {
                        ()=>(
                            <Form>
                                <DrawerBody>
                                    <VStack gap={3}>

                                        <InputField
                                            name='date_admission'
                                            label='Fecha de ingreso'
                                            type='date'
                                        />

                                        <SelectField name='level' label="Nivel" options={optionsLevel}/>
                                        <SelectField name='group_level' label="Grupo" options={optionsGroupLevels}/>
                                        <SelectField name='category' label="Categoría" options={optionsCategory}/>
                                       
                                        <SwitchField
                                            name='active'
                                            label='Activo'
                                            defaultChecked = {true}
                                        />

                                    </VStack>
                                </DrawerBody>
                                <DrawerFooter borderTopWidth='1px'>
                                    <Button variant='outline' mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme='blue' type='submit'>Filtrar</Button>
                                </DrawerFooter>
                            
                            </Form>
                        )
                    }
                </Formik>
            </DrawerContent>
        </Drawer>
        </>
    )
}
