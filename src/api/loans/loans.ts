import { SafeAny } from "@/common";
import { FEATURES } from "@/constants";
import { FltersLoan, Loan } from "@/interfaces";
import Http from "@/libs";

const URL = FEATURES.loans;

export const createLoan = async( values: Loan) => {

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

export const getLoans = async(filters?: FltersLoan) => {
    try {

        const { data } = await Http.get(`/${URL}`, {
            params: filters,
        })
        return data!.students;

    } catch (error) {
        console.log('error', error)
    }
}


