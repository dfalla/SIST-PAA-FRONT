import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
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
import { STUDENT, optionsCategory, optionsLevel } from '..';
import { InputField, SelectField, SwitchField } from '@/common';
import moment from 'moment';
import { convertStringTrueOrFalse } from '@/helpers';

interface FilterProps {
    data: STUDENT[];
    setFilteredData: Dispatch<SetStateAction<STUDENT[]>>
}

interface FilterArgsState{
    date_admission: string;
    category: string;
    level: string;
    active: boolean;
}


const initialValues: FilterArgsState = {
    date_admission: '',
    category: '',
    level: '',
    active: true,
}

export const FilterTableStudent: FC<FilterProps> = ({ data, setFilteredData }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

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



        const filteredItems = data.filter((item) => 
            {

                if(valuesFilter.active === false){

                    if(valuesFilter.category.length > 0 && valuesFilter.level.length > 0 && valuesFilter.date_admission.length > 0){
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.category === valuesFilter.category && item.level === valuesFilter.level && item.date_admission === valuesFilter.date_admission
                    }
                    if(valuesFilter.category.length > 0 && valuesFilter.level.length > 0 && valuesFilter.date_admission.length === 0) {
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.category === valuesFilter.category && item.level === valuesFilter.level;
                    } 
                    if(valuesFilter.category.length > 0 && valuesFilter.level.length === 0 && valuesFilter.date_admission.length === 0) {
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.category === valuesFilter.category;
                    } 
                    if(valuesFilter.level.length > 0 && valuesFilter.category.length === 0 && valuesFilter.date_admission.length === 0) {
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.level === valuesFilter.level;
                    } 
                    if(valuesFilter.date_admission.length > 0 && valuesFilter.category.length === 0 && valuesFilter.level.length === 0) {
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.date_admission === valuesFilter.date_admission;
                    } 
                    return item.active === convertStringTrueOrFalse(valuesFilter.active)
                } 

                if(valuesFilter.active === true){

                    if(valuesFilter.category.length > 0 && valuesFilter.level.length > 0 && valuesFilter.date_admission.length > 0){
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.category === valuesFilter.category && item.level === valuesFilter.level && item.date_admission === valuesFilter.date_admission
                    } 
                    
                    if(valuesFilter.category.length > 0 && valuesFilter.level.length > 0 && valuesFilter.date_admission.length === 0) {
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.category === valuesFilter.category && item.level === valuesFilter.level
                    }
                    
                    if(valuesFilter.date_admission.length > 0 && valuesFilter.category.length > 0 && valuesFilter.level.length === 0) {
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.date_admission === valuesFilter.date_admission && item.category === valuesFilter.category
                    }
                    
                    if(valuesFilter.date_admission.length > 0 && valuesFilter.level.length > 0 && valuesFilter.category.length === 0) {
                        return item.active === convertStringTrueOrFalse(valuesFilter.active) && item.date_admission === valuesFilter.date_admission && item.level === valuesFilter.level
                    }
                    
                    if(valuesFilter.category.length > 0 || valuesFilter.level.length > 0 || valuesFilter.date_admission.length > 0) {
                        return item.category === valuesFilter.category || item.level === valuesFilter.level || item.date_admission === valuesFilter.date_admission
                    } 

                    return item.active === convertStringTrueOrFalse(valuesFilter.active) 
                } 

            } 
        
        );

        setFilteredData(filteredItems);
        onClose();
    };

    useEffect(() => {
        setFilteredData(data);
    }, [data, setFilteredData]);
  
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
