import { Scale } from "tonal";
import { ScalesData } from "./scalesData.js";

export const KEYS = [
    "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"
];

export function getScaleNotes(key, scale) {
    return Scale.scaleNotes(Scale.get(`${key} ${scale}`).notes);
}

export function getScalesFiltered(filters) {
    const activeFilters = filters.filter((filter) => filter.checked).map((filter) => filter.name);
    return ScalesData.filter((scaleData) => scaleData.tags.some((tag) => activeFilters.includes(tag)));
}
