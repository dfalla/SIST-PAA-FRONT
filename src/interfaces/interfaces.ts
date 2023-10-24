import { STUDENT } from "@/features";

export interface LoginArgs {
    username: string;
    password: string;
}

export interface Profile {
    id_user: string;
    name: string;
    lastName: string;
    token: string;
    msg: string;
}

export interface InitialValues{
    username: string;
    password: string;
}

// export interface STUDENT{
//     name: string;
//     last_name: string;
//     mother_last_name: string;
//     type_document:  string;
//     num_document: string
// }

export interface GROUPS{
    student_id                : string;
    student_name              : string;
    student_last_name         : string;
    student_document_number   : string;
    group_name                : string;
}

export interface Schedule{
    monday?    : string;
    tuesday?   : string;
    wednesday? : string;
    thursday?  : string;
    friday?    : string;
    saturday?  : string;
    hour   : string
}

export interface Loan {
    name: string;
    last_name: string;
    capital: number;
    money_delivery_date: string;
    active : boolean;
}

export interface UpdateScheduleArgs{
    id_schedule: string;
    values: Schedule;
}

export interface UpdateStudenttArgs{
    id_student: string;
    values: STUDENT;
}

export interface Filters {
    active          : string | boolean;
    level?          : string;
    category?       : string
    date_admission? : string;
}

export interface FltersLoan {
    name?: string;
    last_name?: string;
    money_delivery_date?: string;
}

export interface Option {
    id: string;
    value: string;
}
