import { loginRequest } from "@/api";
import { InitialValues } from "@/interfaces";

export const login = async ({username, password}: InitialValues) =>{
    const data = await loginRequest({username, password});
    const {id, name, lastName, token} = data;
    return {
        id_user: id,
        name,
        lastName,
        token
    }
}