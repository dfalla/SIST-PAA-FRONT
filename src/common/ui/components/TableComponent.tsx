import { FC, useRef } from "react";
import { Box, Button, HStack, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr, TableCaption, Tfoot, Text } from '@chakra-ui/react'

import { STUDENT } from "@/features"
import { useDownloadExcel  } from 'react-export-table-to-excel';

interface STUDENTS extends STUDENT {
    id_student: string
}



interface TableComponentProps {
    data                  : STUDENTS[];
    colorScheme?          : string;
    variant               : string;
    title                 : string;
    exportTableExcel?     : boolean;
    heads                 : string[];
    editData?             : (id: string) => void;
    deleteData?           : (id: string) => void;
}

export const TableComponent: FC<TableComponentProps> = ({
    data,
    exportTableExcel,
    heads,
    colorScheme,
    variant,
    title, 
    deleteData,
    editData
}) => {

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
                { exportTableExcel && 
                    <TableCaption placement='top' mb={5} mt={0}> 
                        <Text fontWeight={'bold'} fontSize={30} color={'brand.clonika.blue.800'}> 
                           { title }
                        </Text>
                    </TableCaption> }
                
                <Thead>
                    <Tr >
                        {
                            heads.map((head, index)=>(
                                <Th key={index} fontSize={18} textAlign={'start'} color={'brand.clonika.blue.800'} width={'200px'}>{head}</Th>
                            )) 


                        }
                    </Tr>
                </Thead>
                <Tbody mb={20}>
                    {
                        data?.map(({
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
                        }: STUDENTS) => (
                            
                        <Tr
                            key={`${id_student}-${document_number}`}
                        >
                            <Td textAlign={'start'} width={'200px'}>{name}</Td>
                            <Td textAlign={'start'} width={'200px'}>{last_name}</Td>
                            <Td textAlign={'start'} width={'200px'}>{mother_last_name}</Td>
                            <Td textAlign={'start'} width={'200px'}>{type_document}</Td>
                            <Td textAlign={'start'} width={'200px'}>{document_number}</Td>
                            <Td textAlign={'start'} width={'200px'}>{address}</Td>
                            <Td textAlign={'start'} width={'200px'}>{phone_number}</Td>
                            <Td textAlign={'start'} width={'200px'}>{age}</Td>
                            <Td textAlign={'start'} width={'200px'}>{date_admission}</Td>
                            <Td textAlign={'start'} width={'200px'}>{category}</Td>
                            <Td textAlign={'start'} width={'200px'}>{level}</Td>
                            <Td textAlign={'start'} width={'200px'}>{amount_payable}</Td>
                            <Td textAlign={'start'} width={'200px'}>{active}</Td>
                            {/* <Td>
                                {
                                    !exportTableExcel && 
                                    (
                                        <HStack
                                            gap={2}
                                            justifyContent={'center'}
                                        >
                                            <IconButton
                                                color={'brand.clonika.blue.800'}
                                                _hover={{
                                                    cursor: 'pointer'
                                                }}
                                                aria-label='edit sale'
                                                icon={<LiaEdit fontSize={25}/>}
                                                onClick={()=>deleteData!(id_student!)}
                                                isDisabled={(id_producto === idMarcaProduct) && edit}
                                            />

                                            <IconButton
                                                color={'red'} 
                                                _hover={{
                                                    cursor: 'pointer'
                                                }}
                                                aria-label='delete sale'
                                                icon={<LiaTrashSolid fontSize={25}/>}
                                                onClick={()=>deleteProductToCart!(id_producto!)}
                                                isDisabled={(id_producto === idMarcaProduct) && edit}
                                            />
                                        </HStack>
                                    )
                                }
                                
                            </Td> */}
                        </Tr>
                        ))
                    }
                </Tbody>
                {/* <Tfoot>
                    {
                        array?.length > 0 && (
                        <Tr background={'brand.clonika.blue.800'} color={'white'} mt={5}>
                            <Td colSpan={3} textAlign={'center'} fontWeight={'bold'} >{exportTableExcel ? 'Venta Total' : 'Total a pagar' } </Td>
                            <Td colSpan={2} fontWeight={'bold'} textAlign={'inherit'}>{`S/.${ exportTableExcel ? pagoTotal : totalAPagar }`}</Td>
                        </Tr>
                        ) 
                    }
                </Tfoot> */}
            </Table>
        </TableContainer>
        <Box
            alignSelf={'flex-start'}
        >
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
        </Box>
    </HStack>
  )
}
