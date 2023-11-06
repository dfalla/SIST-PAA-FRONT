import { Item} from "@/features";
import { NewLoans } from "@/interfaces";
import moment from "moment";

export const orderDataForHoursRegistred = (arr: Item[]) => {
    
    const students = [...arr];

    for (let i = 0; i < students.length; i++) {
        const fecha = moment(arr[i].date_admission, 'DD/MM/YYYY');
        arr[i].times_created = fecha.valueOf();
    }
    const children =  students.filter((student) => student.category === 'nino').sort((a,b) => b.times_created! - a.times_created!)
    const youths = students.filter((student)=> student.category === 'joven').sort((a,b) => b.times_created! - a.times_created!);
    const adults = students.filter((student)=>student.category === 'adulto').sort((a,b) => b.times_created! - a.times_created!);

    return {
        children,
        youths,
        adults
    }

}

export const orderLoans = (loans: NewLoans[]) => {
    const orderLoans = loans.sort((a,b) => b.times_created - a.times_created);

    return orderLoans;
}