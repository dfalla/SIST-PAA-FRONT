import * as Yup from 'yup'
import { ARTISTICREFERENCE, DOCUMENTATION, PERSONALINFORMATION } from '../interfaces';


export const PERSONALINFORMATIONINITIALVALUES: PERSONALINFORMATION = {
  name: '',
  last_name: '',
  mother_last_name: '',
  phone_number: '',
  image: null,
  address: null
}

export const DOCUMENTATIONINITIALVALUES: DOCUMENTATION = {
  type_document: '',
  document_number: '',
  age: '',
  date_admission: ''
}

export const ARTISTICREFERENCEINITIALVALUES: ARTISTICREFERENCE = {
  category: '',
  level: '',
  amount_payable: 0,
}


export const PersonalInformationvalidationSchema = Yup.object({
  name: Yup.string().required('Este campo es requerido'),
  phone_number: Yup.string().required('Este campo es requerido'),
  last_name: Yup.string().required('Este campo es requerido'),
  mother_last_name: Yup.string().required('Este campo es requerido'),
  image: Yup.string()
    .oneOf(
      ["image/png", "image/jpg", "image/jpeg", "image/gif"],
      "El formato de la imagen tiene que ser jpg, png, jpeg o gif"
    )
});

export const DocumentationvalidationSchema = Yup.object({
  type_document: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
  document_number: Yup.string().required('Este campo es requerido'),
  age: Yup.number().required('Este campo es requerido').max(99, 'El número no debe tener más de 2 dígitos'),
  date_admission: Yup.string().required('Este campo es requerido'),
})

export const ArtisticReferencevalidationSchema = Yup.object({
  address: Yup.string(),
  category: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
  level: Yup.string().required('Debes seleccionar un tipo de documento de identidad'),
  amount_payable: Yup.number().required('Este campo es requerido').max(80, 'El monto no debe de pasarse los S/.80'),
})