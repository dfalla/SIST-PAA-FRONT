import { SafeAny } from "@/common";
import { GROUPS } from "@/interfaces";
import Http from "@/libs";


export const getStudentsOfTheGroup = async() => {
    try {

        const { data } = await Http.get(`/${URL}`)
        return data!.students;

    } catch (error) {
        console.log('error', error)
    }
}


export const AddStudentOfTheGroup = async( values: GROUPS) => {
    const { group_name } = values;
    const {  student_id, student_name, student_last_name, student_document_number } = values;

    const newValues = { student_id, student_name, student_last_name, student_document_number }
    
    const formData = new FormData();

    for(const key in newValues){
        formData.append(key, (values as SafeAny)[key]);
    }

    try {
       const {data }= await Http.post(`/${group_name}`, formData)
       return data;

    } catch (error) {
        console.log("error", error)
        return error;
    }
}


export const deleteStudentOfTheGroup = async(id_student: string) => {
    try {
        await Http.delete(`/${URL}/${id_student}`);
    } catch (error) {
        console.log('error', error)
    }
}
