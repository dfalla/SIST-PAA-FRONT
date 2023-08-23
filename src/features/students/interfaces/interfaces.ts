export interface Item{
    id_student: string;
    name: string;
    last_name: string;
    mother_last_name: string;
    image: string;
    dni: string;
}
 
export interface STUDENT {
    name: string;
    last_name: string;
    mother_last_name: string;
    phone_number: number | string;
    image: File | null;
    address: string | null;
    type_document: string;
    document_number: number | string;
    age: string;
    date_admission: string;
    category: string;
    level: string; 
    amount_payable: number;

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