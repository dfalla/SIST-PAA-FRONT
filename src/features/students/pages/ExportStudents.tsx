import { TableComponent } from "@/common"
import { useGetAllStudents } from ".."

const HEADS: string[] = [
  'NOMBRE',
  'AP. PATERNO',
  'AP. MATERNO',
  'TIP. DOC',
  'NUM. DOC',
  'DOMICILIO',
  'TELÉFONO',
  'EDAD',
  'FECHA INGRESO',
  'CATEGORIA',
  'NIVEL',
  'MONTO',
  'ACTIVO'
]

export const ExportStudents = () => {
  const { data } = useGetAllStudents();
  return (
    <TableComponent
      data = { data! }
      heads={HEADS}
      title="Registro de estudiantes" 
      variant='unstyled'
    />
  )
}
