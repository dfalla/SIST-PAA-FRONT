import { Dispatch ,SetStateAction, useEffect, useState } from "react";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Item } from ".."
import { AiOutlineSearch } from "react-icons/ai";
import { SafeAny } from "@/common";

interface FilterProps {
  data: Item[];
  setFilteredData: Dispatch<SetStateAction<Item[]>>
}

export const Filter = ({data, setFilteredData}: FilterProps) => {

  const [filterValue, setFilterValue] = useState<string>('');

  const handleFilterChange = (event: SafeAny) => {
      setFilterValue(event.target.value);
      handleFilter(event.target.value);
  };
  
  const handleFilter = (filter: string) => {
  
      let filterValue: string = '';
      
      let newDocumentNumber: string = '';

      const dniPattern = /^(?:\d{8}|\d{9})$/;

      if (dniPattern.test(filter)) newDocumentNumber = filter
      
      if(filter.length > 0) filterValue = filter.split('')[0].toUpperCase() + filter.slice(1)
  
      const filteredItems = data.filter((item) =>item.name.includes(filterValue) || item.last_name.includes(filterValue) || item.mother_last_name.includes(filterValue) || item.document_number === newDocumentNumber);
      
      setFilteredData(filteredItems);
  };

  useEffect(() => {
      setFilteredData(data);
  }, [data, setFilteredData]);



  return(

    <Box alignSelf={"center"}>
      <InputGroup>
        <InputRightElement
            pointerEvents="none"
            children={<AiOutlineSearch color="gray.300" />}
        />
        <Input
            type="text"
            value={filterValue}
            onChange={handleFilterChange}
            placeholder="Filtrar..."
            backgroundColor={"white"}
            focusBorderColor={"white"}
            width={200}
        />
        </InputGroup>
    </Box>
  )
}

