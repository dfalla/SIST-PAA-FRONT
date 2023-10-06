import { STUDENT } from "@/features"
import { customDate } from ".";



export const transformData = (values:STUDENT) => {
    if(values.address!.length === 0){
        values.address = null
    }
    values.age = values.age.toString();
    values.phone_number = values.phone_number.toString();
    values.date_admission = customDate(values.date_admission);

  return {
    valuesToSend: values
  }
}


export const trueOrFalse = (value: string) => {
  if(value === 'no'){
    return false;
  }

  if(value === 'si'){
    return true;
  }
}

export const convertStringTrueOrFalse = (value: boolean | string) => {
  if(value === false){
    return 'no';
  }

  if(value === true){
    return 'si';
  }
}
