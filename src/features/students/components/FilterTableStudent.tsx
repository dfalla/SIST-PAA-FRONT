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
    HStack,
    VStack,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik';
import { STUDENT, optionsCategory, optionsLevel } from '..';
import { InputField, SelectField } from '@/common';

interface FilterProps {
    data: STUDENT[];
    setFilteredData: Dispatch<SetStateAction<STUDENT[]>>
}

interface FilterArgsState{
    name: string;
    last_name: string;
    mother_last_name: string;
    document_number: string;
    date_addmission: string;
    category: string;
    level: string;
}


const initialValues: FilterArgsState = {
    name: '',
    last_name: '',
    mother_last_name: '',
    document_number: '',
    date_addmission: '',
    category: '',
    level: ''
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

    // if(filter.length > 0) filterValue = filter.split('')[0].toUpperCase() + filter.slice(1)
   
    const filteredItems = data.filter((item) =>{
        if(
            valuesFilter.category.length > 0 && 
            valuesFilter.level.length > 0 && 
            valuesFilter.name.length > 0 && 
            valuesFilter.last_name.length > 0
        ){
            return  item.category === valuesFilter.category && item.level === valuesFilter.level && item.name ===valuesFilter.name  && item.last_name === valuesFilter.last_name; 
        } else {
            return  item.category === valuesFilter.category || item.level === valuesFilter.level;
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
        <Button leftIcon={<AiOutlineSearch color="gray.300" />} colorScheme='teal' onClick={onOpen} variant={'outline'}>
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
                        (values)=>{
                            handleFilterChange(values);
                            // console.log("values del filtro 😎", values)
                        }
                    }
                >
                    {
                        ()=>(
                            <Form>
                                <DrawerBody>
                                    <VStack gap={3}>
                                        <InputField
                                            label='Nombre'
                                            name='name'
                                            placeholder='Escribe el nombre'
                                            type='text'
                                        />
                                        <InputField
                                            label='Apellido Paterno'
                                            name='last_name'
                                            placeholder='Escribe el apellido paterno'
                                            type='text'
                                        />
                                        <InputField
                                            label='Apellido Materno'
                                            name='mother_last_name'
                                            placeholder='Escribe el apellido materno'
                                            type='text'
                                        />
                                        <HStack>
                                            <SelectField name='level' label="Nivel" options={optionsLevel}/>
                                            <SelectField name='category' label="Categoría" options={optionsCategory}/>
                                        </HStack>
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
