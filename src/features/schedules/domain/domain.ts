import { Schedule } from '@/interfaces';
import * as Yup from 'yup';

export const INITIALVALUES: Schedule = {
  hour       : '',
  monday     : '',
  tuesday    : '',
  wednesday  : '',
  thursday   : '',
  friday     : '',
  saturday   : '',
}

export const ScheduleValidationSchema = Yup.object({
    hour: Yup.string().required('Este campo es requerido'),
    monday: Yup.string(),
    tuesday: Yup.string(),
    wednesday: Yup.string(),
    thursday: Yup.string(),
    friday: Yup.string(),
    saturday: Yup.string(),
});