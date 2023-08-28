import { FC, useRef } from "react";
import { Button, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, TableCaption, Text } from '@chakra-ui/react'
import { useDownloadExcel  } from 'react-export-table-to-excel';
import { FormStudent, STUDENT } from "@/features"
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
                        <Text fontWeight={'bold'} fontSize={30} color={'brand.clonika.blue.800'}> 
                           { title }
                        </Text>
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
                            <Td>
                                <HStack
                                    gap={2}
                                    justifyContent={'center'}
                                >
                                    <FormStudent edit={true} icon={true} id={id_student}/>

                                    <DeleteModal
                                        color={'red'}
                                        icon={true}
                                        id_student={id_student}
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
