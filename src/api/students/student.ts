import { SafeAny } from "@/common";
import { FEATURES } from "@/constants";
import { Filters, Student, UpdateStudenttArgs } from "@/interfaces";
import Http from "@/libs";

const URL = FEATURES.students;

export const getStudents = async(filters?: Filters) => {
    try {

        const { data } = await Http.get(`/${URL}`, {
            params: filters,
        })
        return data!.students;

    } catch (error) {
        console.log('error', error)
    }
}

export const geStudentById = async(id: string) =>{
    try {
        const { data } = await Http.get(`/${URL}/${id}`)
        return data!.student;
        
    } catch (error) {
        console.log("error",error)
    }
}

export const createStudent = async( values: Student) => {
    const formData = new FormData();

    for(const key in values){
        formData.append(key, (values as SafeAny)[key]);
    }

    try {
       const {data }= await Http.post(`/${URL}`, formData)
       return data;

    } catch (error) {
        console.log("error", error)
        return error;
    }
}

export const updateStudent = async({id_student, values} : UpdateStudenttArgs) => {

    const formData = new FormData();

    for(const key in values){
        formData.append(key, (values as SafeAny)[key]);
    }

    try {
       const { data } =  await Http.put(`/${URL}/${id_student}`, formData)
       return data.msg;
    } catch (error) {
        console.log('error capturado 😤', error)
    }
}

export const deleteStudent = async(id_student: string) => {
    try {
        const { data } = await Http.delete(`/${URL}/${id_student}`);
        return data;
    } catch (error) {
        console.log('error', error)
    }
}
