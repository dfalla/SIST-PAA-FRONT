import { TableStudents, useGetAllStudents } from ".."
import { Box } from "@chakra-ui/react";

const HEADS: string[] = [
  'NOMBRE',
  'AP. PAT',
  'AP. MAT',
  'TIP. DOC',
  'NUM. DOC',
  'DIR',
  'TELF',
  'EDAD',
  'INGRESO',
  'CAT.',
  'NIVEL',
  'PAGO',
  'ACTIVO',
  'ACCIONES'
]

export const ExportStudents = () => {
  const { data } = useGetAllStudents();

  return (

    <Box mt={5}> 
      <TableStudents
        data = { data! }
        heads={HEADS}
        title="Estudiantes Registrados" 
        variant='striped'
        exportTableExcel={true}
      />
    </Box>
  )
}
