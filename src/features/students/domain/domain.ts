import * as Yup from 'yup'
import { STUDENT } from '../interfaces';


export const INITIALVALUES: STUDENT = {
  name: '',
  last_name: '',
  mother_last_name: '',
  phone_number: '',
  image: null,
  address: '',
  type_document: '',
  document_number: '',
  age: '',
  date_admission: '',
  category: '',
  active: false,
  level: '',
  amount_payable: 0,
}

// export const DOCUMENTATIONINITIALVALUES: DOCUMENTATION = {
//   type_document: '',
//   document_number: '',
//   age: '',
//   date_admission: ''
// }

// export const ARTISTICREFERENCEINITIALVALUES: ARTISTICREFERENCE = {
//   category: '',
//   level: '',
//   amount_payable: 0,
// }

export const validationSchema = Yup.object({
  name: Yup.string().required('Este campo es requerido'),
  phone_number: Yup.number().required('Este campo es requerido').max(999999999, 'El número no debe tener más de 9 dígitos'),
  last_name: Yup.string().required('Este campo es requerido'),
  mother_last_name: Yup.string().required('Este campo es requerido'),
  type_document: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
  document_number: Yup.number().required('Este campo es requerido'),
  age: Yup.number().required('Este campo es requerido').max(99, 'El número no debe tener más de 2 dígitos'),
  date_admission: Yup.string().required('Este campo es requerido'),
  category: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
  level: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
  address: Yup.string().required('Este campo es requerido'),
  amount_payable: Yup.number().required('Este campo es requerido').max(80, 'El monto no debe de pasarse los S/.80'),
})


// export const PersonalInformationvalidationSchema = Yup.object({
//   name: Yup.string().required('Este campo es requerido'),
//   phone_number: Yup.string().required('Este campo es requerido'),
//   last_name: Yup.string().required('Este campo es requerido'),
//   mother_last_name: Yup.string().required('Este campo es requerido'),
//   image: Yup.string()
//     .oneOf(
//       ["image/png", "image/jpg", "image/jpeg", "image/gif"],
//       "El formato de la imagen tiene que ser jpg, png, jpeg o gif"
//     )
// });

// export const DocumentationvalidationSchema = Yup.object({
//   type_document: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
//   document_number: Yup.string().required('Este campo es requerido'),
//   age: Yup.number().required('Este campo es requerido').max(99, 'El número no debe tener más de 2 dígitos'),
//   date_admission: Yup.string().required('Este campo es requerido'),
// })

// export const ArtisticReferencevalidationSchema = Yup.object({
//   address: Yup.string(),
//   category: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
//   level: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
//   amount_payable: Yup.number().required('Este campo es requerido').max(80, 'El monto no debe de pasarse los S/.80'),
// })