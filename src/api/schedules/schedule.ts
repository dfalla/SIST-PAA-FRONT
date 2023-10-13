import { SafeAny } from "@/common";
import { FEATURES } from "@/constants";
import { Schedule, UpdateScheduleArgs } from "@/interfaces";
import Http from "@/libs";

const URL = FEATURES.schedule;

export const getSchedules = async() => {
    try {
        const { data } = await Http.get(`/${URL}`)
        
        return data!.schedules

    } catch (error) {
        console.log('error', error)
    }
}

export const geScheduleById = async(id_schedule: string) =>{
    try {
        const { data } = await Http.get(`/${URL}/${id_schedule}`)
        // console.log("geScheduleById", data)
        return data!.scheduleInBD;
        
    } catch (error) {
        console.log("error",error)
    }
}

export const createSchedule = async( values: Schedule) => {

    const formData = new FormData();

    for(const key in values){
        formData.append(key, (values as SafeAny)[key]);
    }

    try {
       const {data }= await Http.post(`/${URL}`, formData)
       return data;

    } catch (error) {
        return error;
    }
}

export const updateSchedule = async({id_schedule, values} : UpdateScheduleArgs) => {

    const formData = new FormData();

    for(const key in values){
        formData.append(key, (values as SafeAny)[key]);
    }

    try {
        const { data } = await Http.put(`/${URL}/${id_schedule}`, formData)
        return data.msg;
    } catch (error) {
        console.log('error capturado 😤', error)
    }
}

export const deleteSchedule = async(schedule_id: string) => {
    try {
       const { data } =  await Http.delete(`/${URL}/${schedule_id}`);
       return data.msg;
    } catch (error) {
        console.log('error', error)
    }
}