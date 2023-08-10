import { loginRequest } from "@/api";
import { InitialValues } from "@/interfaces";

export const login = async ({username, password}: InitialValues) =>{
    const data = await loginRequest({username, password});
    const {id_user, name, lastName, token} = data;
    return {
        id_user,
        name,
        lastName,
        token
    }
}