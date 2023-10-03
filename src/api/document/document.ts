import { FEATURES } from "@/constants";
import Http from "@/libs";

const URL = FEATURES.typeDocument

export const getTypesDocument = async() => {
    try {
        const types_document = await Http.delete(`/${URL}`);
        console.log("types_document", types_document);
    } catch (error) {
        console.log("error", error)
    }
}