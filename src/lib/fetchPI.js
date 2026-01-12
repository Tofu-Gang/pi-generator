import axios from "axios";

const URL = "https://api.pi.delivery/v1/pi";
const MAX_NUMBER_OF_DIGITS = 1000;
const PI_NUMBERS_LIMIT = 100000000000000;

/*
 * fetch a desired numbers from PI API from the selected position in PI
 */
async function fetchPi(start, numberOfDigits) {
    try {
        const response = await axios.get(`${URL}?start=${start}&numberOfDigits=${numberOfDigits}`);
        return response.data.content;
    } catch(error) {
        console.error(error);
    }
}

/*
 * random position in decimal representation of PI between zero (inclusive) and topBoundary param (exclusive)
 */
function getRandomPiPosition(topBoundary) {
    return Math.floor(Math.random() * (PI_NUMBERS_LIMIT - topBoundary));
}

/*
 * convert string array of decimal numbers to a desired base;
 * for base 12, look for 10 or 11 by joining two consecutive numbers
 * for base less than 10, some results have more than one digit; split those to another arrays of single digits
 * returns flattened result of single digits in desired base
 */
function convertToBase(numbers, base) {
    let i = 0;

    while(i < numbers.length - 1) {
        // if base 12 (chromatic scale) is selected, look for 10 or 11 by joining two consecutive numbers
        const composite = numbers[i] + numbers[i + 1];

        if(composite[0] !== "0" && Number(composite) < base) {
            // 10 or 11 found, replace one number with the 10 or 11 and remove the second number
            numbers[i] = composite;
            numbers.splice(i + 1, 1);
        }

        // convert the number to a desired base; numbers with more digits are split to another array of single digits
        numbers[i] = Number(numbers[i]).toString(base).split("");
        i++;
    }

    return numbers.flat();
}

/*
 * get a sequence of numbers from decimal representation of PI in desired base;
 * the sequence has desired length (up to API maximum) and starts in random position in PI
 */

export default async function getPiNumbers(base, numberOfDigits) {
    // the api returns only up to stated maximum number of values
    if(numberOfDigits > MAX_NUMBER_OF_DIGITS) {
        numberOfDigits = MAX_NUMBER_OF_DIGITS;
    }
    const start = getRandomPiPosition(numberOfDigits);
    const numbers = (await fetchPi(start, numberOfDigits)).split("");
    return convertToBase(numbers, base);
}
