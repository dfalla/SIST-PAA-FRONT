import { STUDENT } from "@/features"
import { customDate } from ".";



export const transformData = (values:STUDENT) => {
    if(values.address!.length === 0){
        values.address = null
    }
    values.age = values.age.toString();
    values.document_number = values.document_number.toString();
    values.phone_number = values.phone_number.toString();
    values.date_admission = customDate(values.date_admission);

  return {
    valuesToSend: values
  }
}
