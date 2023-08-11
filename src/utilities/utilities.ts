import { loginRequest } from "@/api";
import { InitialValues } from "@/interfaces";

export const loginRquest = async ({username, password}: InitialValues) =>{
    const data = await loginRequest({username, password});
    const {id_user, name, lastName, token, msg} = data;
    return {
        id_user,
        name,
        lastName,
        token,
        msg
    }
}