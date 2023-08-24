import moment from "moment";

export const customDate = (value: string) => {
    const formattedDate = moment(value, 'YYYY/MM/DD').format('DD/MM/YYYY');

    return formattedDate;
}

export const customDateRevert = (value: string) => {
    const formattedDate = moment(value, 'DD/MM/YYYY').format('YYYY/MM/DD');

    return formattedDate;
}


