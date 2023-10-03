import { loginRequest } from "@/api";
import { InitialValues, Option } from "@/interfaces";
import Http from "@/libs";

export const loginRquest = async ({username, password}: InitialValues) =>{
    const data = await loginRequest({username, password});
    const {user_id, name, last_name, token, msg, role, image} = data;
    return {
        user_id,
        name,
        last_name,
        token,
        image,
        role,
        msg
    }
}

export const fetchChildOptions = async (parentValue: string): Promise<Option[]> => {

    const { data } = await Http.get(`/${parentValue}`)
    
    return data;


};