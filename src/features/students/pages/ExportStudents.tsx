import { TableComponent } from "@/common"
import { useGetAllStudents } from ".."
import { Box } from "@chakra-ui/react";

const HEADS: string[] = [
  'NOMBRE',
  'AP. PATERNO',
  'AP. MATERNO',
  'TIP. DOC',
  'NUM. DOC',
  'DOMICILIO',
  'TELÉFONO',
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
      <TableComponent
        data = { data! }
        heads={HEADS}
        title="Estudiantes Registrados" 
        variant='striped'
        exportTableExcel={true}
      />
    </Box>
  )
}
