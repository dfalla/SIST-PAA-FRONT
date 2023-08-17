import { FEATURES } from "@/constants";
import Http from "@/libs";

const URL = FEATURES.students;

export const getStudents = async() => {
    try {

        const { data } = await Http.get(`/${URL}`)
        return data.students!;

    } catch (error) {
        console.log('error', error)
    }
}