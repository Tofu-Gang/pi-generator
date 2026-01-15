import { Scale } from "tonal";
import { Scales } from "./musicData.js";
import getPiNumbers from "./fetchPI.js";

export function getScaleNotes(key, scale) {
    return Scale.scaleNotes(Scale.get(`${key} ${scale}`).notes);
}

export function getScalesFiltered(filters) {
    const activeFilters = filters.filter((filter) => filter.checked).map((filter) => filter.name);
    return Scales.filter((scaleData) => scaleData.tags.some((tag) => activeFilters.includes(tag)));
}

/*
 * Randomize array in-place using Durstenfeld shuffle algorithm
 */
function shuffleArray(array) {
    // make a new copy so a state isn't changed
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }

    return newArray;
}

export async function getResultNotes(notes, resultLength) {
    const numbersShuffled = shuffleArray(Array.from(Array(notes.length).keys()));
    const notesShuffled = shuffleArray(notes);
    const mapping = {};
    numbersShuffled.forEach((number, index) => {
        mapping[number] = notesShuffled[index];
    });
    const PiNumbers = await getPiNumbers(notes.length, resultLength.length);
    return PiNumbers.map((number) => mapping[number]);
}
