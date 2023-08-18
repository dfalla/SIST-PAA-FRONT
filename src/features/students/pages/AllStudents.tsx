import { Box, SimpleGrid} from "@chakra-ui/react";
import { useGetAllStudents } from "../hooks";
import { CardStudent } from "../components";
import { Item } from "../interfaces";

export const AllStudents = () => {
  const { data } = useGetAllStudents();
  console.log("data", data);
  return (
    <>
      <Box bg={'brand.clonika.blue.800'} padding={4} minHeight={'90vh'}>
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
