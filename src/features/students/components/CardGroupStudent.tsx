import { Card, CardBody, CardHeader, Heading, ListItem, OrderedList } from '@chakra-ui/react';
import { FC } from 'react';
import { STUDENT, useGetAllStudents } from '..';

interface Args {
    levelName: string
}

export const CardGroupStudent: FC<Args> = ({levelName}) => {
    let students: STUDENT[] = [];
    const { data } = useGetAllStudents();

    students = data;

    const newStudents = students?.filter((student: STUDENT) => student.group_level === levelName)

  return (
    <Card>
        <CardHeader>
            <Heading size='md' textAlign={'center'}> {levelName}</Heading>
        </CardHeader>
        <CardBody>
            <OrderedList>
                    {
                        newStudents.map(({id_student, name, last_name})=>(
                            <ListItem 
                                key={id_student}
                                mb={3}    
                            >
                                {name} {last_name}
                            </ListItem>
                        ))
                    }
            </OrderedList>
        </CardBody>
    </Card>
  )
}
