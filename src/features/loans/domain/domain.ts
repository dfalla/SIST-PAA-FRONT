import { Loan } from '@/interfaces';
import * as Yup from 'yup';

export const INITIALVALUES: Loan = {
  name                 : '',
  last_name            : '',
  capital              : 0,
  money_delivery_date  : '',
}

export const LoanValidationSchema = Yup.object({
    name: Yup.string().required('Este campo es requerido'),
    last_name: Yup.string().required('Este campo es requerido'),
    capital: Yup.number().min(100, 'El monto no debe ser inferior a S/.100').required('Este campo es requerido'),
    money_delivery_date: Yup.string().required('Este campo es requerido'),
});