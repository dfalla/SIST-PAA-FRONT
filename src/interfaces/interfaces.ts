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

export interface Student{
     
}

export interface UpdateStudenttArgs{
    id_student: string;
    values: Student;
}

export interface Filters {
    active          : string | boolean;
    level?          : string;
    category?       : string
    date_admission? : string;
}
