import { Student } from '@/interfaces'
import * as Yup from 'yup'


export const INITIALVALUES: Student = {
    name: '',
    age: '',
    last_name: '',
    mother_last_name: '',
    address: null,
    type_document: '',
    document_number: '',
    phone_number: '',
    category: '',
    level: '',
    image: null,
    amount_payable: 0,
    date_admission: ''
}

export const validationSchema = Yup.object({
    name: Yup.string().required('Este campo es requerido'),
    age: Yup.number().required('Este campo es requerido').max(99, 'El número no debe tener más de 2 dígitos'),
    last_name: Yup.string().required('Este campo es requerido'),
    mother_last_name: Yup.string().required('Este campo es requerido'),
    address: Yup.string(),
    type_document: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
    document_number: Yup.string().required('Este campo es requerido'),
    phone_number: Yup.string().required('Este campo es requerido'),
    category: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
    level: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
    image: Yup.string()
    .oneOf(
      ["image/png", "image/jpg", "image/jpeg", "image/gif"],
      "El formato de la imagen tiene que ser jpg, png, jpeg o gif"
    ),
    amount_payable: Yup.number().required('Este campo es requerido').max(80, 'El monto no debe de pasarse los S/.80'),
    date_admission: Yup.string().required('Este campo es requerido'),
})