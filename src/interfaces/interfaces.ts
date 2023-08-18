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
    name: string;
    last_name: string;
    mother_last_name: string;
    dni: string;
    imagen: File | null;
}

export interface UpdateStudenttArgs{
    id_student: string;
    values: Student;
}
