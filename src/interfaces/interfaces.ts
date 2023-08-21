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
    age: string;
    last_name: string;
    mother_last_name: string;
    address: string | null ;
    type_document: string;
    document_number: string;
    phone_number: string;
    category: string;
    level: string; 
    image: File | null;
    amount_payable: number;
    date_admission: string;
}

export interface UpdateStudenttArgs{
    id_student: string;
    values: Student;
}
