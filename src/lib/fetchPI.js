import axios from "axios";

const URL = "https://api.pi.delivery/v1/pi";
const MAX_NUMBER_OF_DIGITS = 1000;

async function fetchPi(start) {
    const response = await axios.get(`${URL}?start=${start}&numberOfDigits=${MAX_NUMBER_OF_DIGITS}`);

    if(response.status !== 200) {
        throw new Error("Failed to fetch PI data!");
    } else {
        return response.data.content;
    }
}

export default async function getPiNumbers(start, base) {
    return (await fetchPi(start)).split("").map((numberDec) => {
        const stringBase = Number(numberDec).toString(base);
        return stringBase.split("").map((numberBase) => Number(numberBase));
    }).flat();
}
