import { Scale } from "tonal";

export const KEYS = [
    "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"
];

export const SCALES = Scale.names();

export function getScaleNotes(key, scale) {
    return Scale.scaleNotes(Scale.get(`${key} ${scale}`).notes);
}
