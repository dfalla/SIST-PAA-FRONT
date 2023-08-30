export interface Item{
    id_student: string;
    name: string;
    last_name: string;
    mother_last_name: string;
    phone_number: number | string;
    image: string ;
    address: string | null;
    type_document: string;
    document_number: number | string;
    age: string;
    date_admission: string;
    category: string;
    active: boolean;
    level: string; 
    amount_payable: number;
    times_created: number;
}
 
export interface STUDENT {
    id_student?: string;
    name: string;
    last_name: string;
    mother_last_name: string;
    phone_number: number | string;
    image: File | null ;
    address: string | null;
    type_document: string;
    document_number: string;
    age: string;
    date_admission: string;
    category: string;
    active: boolean | string;
    level: string; 
    amount_payable: number;
    times_created?: number;
}

export interface OptionsProps {
    label: string;
    value: string;
}

// export interface DOCUMENTATION {
//     type_document: string;
//     document_number: string;
//     age: string;
//     date_admission: string;
// }

// export interface ARTISTICREFERENCE {
//     category: string;
//     level: string; 
//     amount_payable: number;
// }