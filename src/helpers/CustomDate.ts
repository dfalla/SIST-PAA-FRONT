import moment from "moment";

export const customDate = (value: string) => {
    const formattedDate = moment(value, 'YYYY/MM/DD').format('DD/MM/YYYY');

    return formattedDate;
}