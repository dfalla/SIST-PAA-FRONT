import { 
    FC, 
    useRef, 
    // useState 
} from "react";
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
    // IconButton,
    // useDisclosure,
} from '@chakra-ui/react'

import { InfoIcon } from '@chakra-ui/icons'
import { BiCheckCircle } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDownloadExcel  } from 'react-export-table-to-excel';
import { FilterTableStudent, FormStudent, STUDENT } from "@/features"
import { DeleteModal } from "@/common";
import { FiDownload } from "react-icons/fi";
// import { LiaEdit, LiaTrashSolid } from "react-icons/lia";

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
                        <HStack justifyContent={'space-between'}>
                            <Box>
                                <FilterTableStudent/>
                            </Box>

                            <Text fontWeight={'bold'} fontSize={30} color={'brand.clonika.blue.800'}> 
                                { title }
                            </Text>

                            <Box>
                                {
                                    exportTableExcel && (
                                        <Button
                                            colorScheme='whatsapp'
                                            variant={'outline'}
                                            onClick={onDownload}
                                            rightIcon={<FiDownload />}
                                        >
                                            Descargar
                                        </Button>
                                    ) 
                                }
                            </Box>
                        </HStack> 
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
                            <Td textAlign={'start'}>
                                {
                                    active === 'true' ? (<BiCheckCircle color={'green'}/>) : (<RiCloseCircleLine color={'red'}/>) 
                                }
                            </Td>
                            <Td>
                                <HStack
                                    gap={2}
                                    justifyContent={'center'}
                                >

                                    <FormStudent edit={true} icon={true} id={id_student} />

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

                                    {/* <IconButton
                                        color={'brand.clonika.blue.800'}
                                        _hover={{
                                            cursor: 'pointer'
                                        }}
                                        aria-label='edit sale'
                                        icon={<LiaEdit fontSize={25}/>}
                                        onClick={handleClic}
                                    /> */}

                                    {/* <IconButton
                                        color={'red'} 
                                        _hover={{
                                            cursor: 'pointer'
                                        }}
                                        aria-label='delete sale'
                                        icon={<LiaTrashSolid fontSize={25}/>}
                                        // 
                                    /> */}
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
