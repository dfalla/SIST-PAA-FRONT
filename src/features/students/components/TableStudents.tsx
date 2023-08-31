import { FC, useRef, useState } from "react";
import { 
    Box ,
    Button, 
    HStack, 
    Table, 
    TableContainer, 
    Tbody, 
    Td, 
    Th, 
    Thead, 
    Tr, 
    TableCaption, 
    Text, 
    Tooltip, 
} from '@chakra-ui/react'

import { InfoIcon } from '@chakra-ui/icons'
import { useDownloadExcel  } from 'react-export-table-to-excel';
import { FilterTableStudent, FormStudent, STUDENT } from "@/features"
import { DeleteModal } from "@/common";

interface STUDENTS extends STUDENT {
    id_student: string
}

interface TableStudentsProps {
    data                  : STUDENTS[];
    colorScheme?          : string;
    variant               : string;
    title                 : string;
    exportTableExcel?     : boolean;
    heads                 : string[];
    editData?             : ({id_student, open}: {id_student: string, open: boolean}) => JSX.Element;
}

export const TableStudents: FC<TableStudentsProps> = ({
    data,
    exportTableExcel,
    heads,
    colorScheme,
    variant,
    title, 
}) => {

    const [filteredData, setFilteredData] = useState<STUDENT[]>(data!);

    const tableRef = useRef(null);
   
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: `Alumnos PAA`,
        sheet: 'Registro',
    })
    
  return (
    <HStack
        mb={5}
        gap={5}
        justifyContent={'space-between'}
    >
       
        <TableContainer>
            <Table variant={variant} ref={tableRef} colorScheme={colorScheme} size='sm'>

                    <TableCaption placement='top' mb={5} mt={0}>
                        <HStack justifyContent={'space-between'}>
                            <Box></Box>
                            <Text fontWeight={'bold'} fontSize={30} color={'brand.clonika.blue.800'}> 
                            { title }
                            </Text>
                        
                            <Box>
                             <FilterTableStudent data={data} setFilteredData={setFilteredData}/>
                            </Box>
                        
                        
                        </HStack> 
                    </TableCaption>

                    <TableCaption placement='bottom' mb={5} mt={0} alignItems={'flex-start'}> 
                        {
                            exportTableExcel && (
                                <Button
                                    colorScheme='whatsapp'
                                    onClick={onDownload}
                                >
                                    Exportar en Excel
                                </Button>
                            ) 
                        }
                    </TableCaption>

                <Thead>
                    <Tr >
                        {
                            heads.map((head, index)=>(
                                <Th key={index} fontSize={15} textAlign={'start'} color={'brand.clonika.blue.800'} width={'50px'}>{head}</Th>
                            )) 


                        }
                    </Tr>
                </Thead>
                <Tbody mb={20}>
                    {
                        filteredData?.map(({
                            id_student, 
                            active, 
                            address, 
                            age, 
                            amount_payable, 
                            category, 
                            date_admission, 
                            document_number, 
                            last_name, 
                            level, 
                            mother_last_name,
                            name, 
                            phone_number,
                            type_document 
                        }) => (
                            
                        <Tr
                            key={`${id_student}-${document_number}`}
                        >
                            <Td textAlign={'start'}>{name}</Td>
                            <Td textAlign={'start'}>{last_name}</Td>
                            <Td textAlign={'start'}>{mother_last_name}</Td>
                            <Td textAlign={'start'}>{type_document}</Td>
                            <Td textAlign={'start'}>{document_number}</Td>
                            <Td textAlign={'start'} maxWidth={'100px'}>
                                <Tooltip label={`${address}`} fontSize='md' bg={'brand.clonika.blue.800'}>
                                    <InfoIcon />
                                </Tooltip>
                            </Td>
                            <Td textAlign={'start'}>{phone_number}</Td>
                            <Td textAlign={'start'}>{age}</Td>
                            <Td textAlign={'start'}>{date_admission}</Td>
                            <Td textAlign={'start'}>{category}</Td>
                            <Td textAlign={'start'}>{level}</Td>
                            <Td textAlign={'start'}>{amount_payable}</Td>
                            <Td textAlign={'start'}>{active}</Td>
                            <Td>
                                <HStack
                                    gap={2}
                                    justifyContent={'center'}
                                >
                                    <FormStudent edit={true} icon={true} id={id_student}/>

                                    <DeleteModal
                                        color={'red'}
                                        icon={true}
                                        id_student={id_student!}
                                        last_name={last_name}
                                        mother_last_name={mother_last_name}
                                        msg={'Estás seguro de eliminar al alumn@: '}
                                        name={name}
                                        text={'Eliminar alumno'}
                                    />
                                </HStack>
                            </Td>
                        </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
     
    </HStack>
  )
}
