import { Student } from '@/interfaces'
import * as Yup from 'yup'


export const INITIALVALUES: Student = {
    name: '',
    last_name: '',
    mother_last_name: '',
    dni: '',
    image: null
}

export const validationSchema = Yup.object({
    name: Yup.string().required('Este campo es requerido'),
    last_name: Yup.string().required('Este campo es requerido'),
    mother_last_name: Yup.string().required('Este campo es requerido'),
    dni: Yup.number().required('Este campo es requerido').min(10000000, 'El número debe tener al menos 8 dígitos').max(99999999, 'El número no debe tener más de 8 dígitos'),
})