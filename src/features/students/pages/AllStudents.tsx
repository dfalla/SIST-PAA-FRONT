import { Box, HStack, SimpleGrid, Text} from "@chakra-ui/react";
import { useGetAllStudents } from "../hooks";
import { CardStudent, Filter, FormStudent } from "../components";
import { Item } from "../interfaces";

export const AllStudents = () => {
  const { data } = useGetAllStudents();
  console.log("data", data);
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

          <FormStudent/>
          
        </HStack>
       
       
       
       
       
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          {
            data !== undefined &&
            data.map(({image, last_name, mother_last_name, name, id_student }: Item) => (
              <CardStudent 
                key={id_student}
                image={ image }
                last_name={last_name}
                mother_last_name={mother_last_name}
                name={name}
              />
            ))
          }
        </SimpleGrid>
      </Box>
    </>
  )
}
