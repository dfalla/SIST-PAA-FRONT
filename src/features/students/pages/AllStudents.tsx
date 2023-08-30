import { FC } from 'react';
import { 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
  Box, 
  HStack, 
  SimpleGrid,
  Text, 
} from "@chakra-ui/react";
import { useGetAllStudents } from "../hooks";
import { CardStudent, Filter, FormStudent } from "../components";
import { Item, STUDENT} from "../interfaces";
import { orderDataForHoursRegistred } from '@/helpers';

interface Props {
  edit?: boolean | undefined;
}

export const AllStudents: FC<Props> = ({ edit }) => {
  const { data } = useGetAllStudents();

  


  let childrenArr: Item[] = []
  let youthsArr: Item[] = []

  let adultsArr: Item[] = []
  let salary: number = 0;


  if(data !== undefined) {
    salary = data!.filter((student: STUDENT)=>student.active === 'true').reduce((acumulator: number, element: STUDENT) => acumulator + element.amount_payable, 0)

    const { adults, children, youths} = orderDataForHoursRegistred(data)
    childrenArr = children;
    youthsArr = youths;
    adultsArr = adults;
  }
  

  return (
    <>
      <Box bg={'brand.clonika.blue.800'} padding={4} minHeight={'90vh'}>
        <HStack
          flexWrap="wrap"
          maxW="inherit"
          mx="auto"
          marginBottom={"20px"}
          flexDirection={["column","row","row","row"]}
          gap={[5,5,0,0]}
          justifyContent={["center","center","space-between","space-between"]}
          alignItems={["center", "center", "center", "center"]}
          
        >
          <Filter/>

          <HStack gap={10}>
          <FormStudent  edit={ edit }/>
            <Box>
              <Text color={'white'}>
               Entrada:  S/.{salary}
              </Text>
            </Box>
          </HStack>
          
        </HStack>

        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='center' color={'white'}>
                  Niños
                </Box>
                <AccordionIcon color={'white'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                  {
                    childrenArr.map(({image, last_name, mother_last_name, name, id_student }: Item) => (
                      <CardStudent 
                        key={id_student}
                        id_student={ id_student }
                        image={ image }
                        last_name={last_name}
                        mother_last_name={mother_last_name}
                        name={name}
                      />
                    ))
                  }
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='center' color={'white'}>
                  Jóvenes
                </Box>
                <AccordionIcon color={'white'} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                  {
                    youthsArr.map(({image, last_name, mother_last_name, name, id_student }: Item) => (
                      <CardStudent 
                        key={id_student}
                        id_student={ id_student }
                        image={ image }
                        last_name={last_name}
                        mother_last_name={mother_last_name}
                        name={name}
                      />
                    ))
                  }
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='center' color={'white'}>
                  Adultos
                </Box>
                <AccordionIcon color={'white'}/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                  {
                    adultsArr.map(({image, last_name, mother_last_name, name, id_student }: Item) => (
                      <CardStudent 
                        key={id_student}
                        id_student={ id_student }
                        image={ image }
                        last_name={last_name}
                        mother_last_name={mother_last_name}
                        name={name}
                      />
                    ))
                  }
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
       
      </Box>
    </>
  )
}
