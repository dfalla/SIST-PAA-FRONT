import { Button, Card, CardBody, CardHeader, HStack, Heading, ListItem, OrderedList } from '@chakra-ui/react';
import { FC } from 'react';
import { useGetAllStudents } from '..';
interface Data {
    name: string;
    last_name: string;
}
interface Args {
    name: string
    data?: Data[]
}

export const CardGroupStudent: FC<Args> = ({name, data}) => {
    const { data: Students } = useGetAllStudents();
    console.log("Students", Students);
  return (
    <Card>
        <CardHeader>
            <Heading size='md' textAlign={'center'}> {name}</Heading>
        </CardHeader>
        <CardBody>
            <Button color={'black'} bg={'green'} mb={5}>ADD +</Button>
            <OrderedList>
                <HStack justifyContent={'space-between'}>
                    <ListItem>Daniel Falla</ListItem> <Button color={'black'} bg={'red'}>Eliminar</Button>
                </HStack>
            </OrderedList>
        </CardBody>
    </Card>
  )
}
