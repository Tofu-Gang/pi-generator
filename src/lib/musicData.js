export const Keys = [
    "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"
];

export const ResultLengths = [
    {
        name: "Bass Line Simple",
        length: 8
    },
    {
        name: "Bass Line Busy",
        length: 32
    },
    {
        name: "Guitar Lick/Riff",
        length: 16
    },
    {
        name: "Guitar Solo",
        length: 64
    },
    {
        name: "Custom",
    },
];

export const Tags = {
    major: "Major",
    minor: "Minor",
    nonWestern: "Non-western",
    greekModes: "Greek Modes",
    diminished: "Diminished",
    augmented: "Augmented",
    pentatonic: "Pentatonic (5 Notes)",
    hexatonic: "Hexatonic (6 Notes)",
    heptatonic: "Heptatonic (7 Notes)",
    octatonic: "Octatonic (8 Notes)",
    nonatonic: "Nonatonic (9 Notes)",
    decatonic: "Decatonic (10 Notes)"
}

export const Scales = [
    {
        name: "major pentatonic",
        display: "Major Pentatonic",
        tags: [Tags.major, Tags.pentatonic]
    },
    {
        name: "major",
        display: "Major",
        tags: [Tags.major, Tags.heptatonic]
    },
    {
        name: "minor",
        display: "Minor",
        tags: [Tags.minor, Tags.heptatonic]
    },
    {
        name: "major blues",
        display: "Major Blues",
        tags: [Tags.major, Tags.hexatonic]
    },
    {
        name: "minor blues",
        display: "Minor Blues",
        tags: [Tags.minor, Tags.hexatonic]
    },
    {
        name: "melodic minor",
        display: "Melodic Minor",
        tags: [Tags.minor, Tags.heptatonic]
    },
    {
        name: "harmonic minor",
        display: "Harmonic Minor",
        tags: [Tags.minor, Tags.heptatonic]
    },
    {
        name: "bebop",
        display: "Bebop",
        tags: [Tags.octatonic]
    },
    {
        name: "diminished",
        display: "Diminished",
        tags: [Tags.diminished, Tags.octatonic]
    },
    {
        name: "ionian pentatonic",
        display: "Ionian Pentatonic",
        tags: [Tags.greekModes, Tags.pentatonic]
    },
    {
        name: "dorian",
        display: "Dorian",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "dorian b2",
        display: "Dorian B2",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "dorian #4",
        display: "Dorian #4",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "phrygian",
        display: "Phrygian",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "phrygian dominant",
        display: "Phrygian Dominant",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "lydian",
        display: "Lydian",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "lydian pentatonic",
        display: "Lydian Pentatonic",
        tags: [Tags.greekModes, Tags.pentatonic]
    },
    {
        name: "lydian dominant pentatonic",
        display: "Lydian Dominant Pentatonic",
        tags: [Tags.greekModes, Tags.pentatonic]
    },
    {
        name: "double harmonic lydian",
        display: "Double Harmonic Lydian",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "lydian dominant",
        display: "Lydian Dominant",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "lydian augmented",
        display: "Lydian Augmented",
        tags: [Tags.greekModes, Tags.augmented, Tags.heptatonic]
    },
    {
        name: "lydian diminished",
        display: "Lydian Diminished",
        tags: [Tags.greekModes, Tags.diminished, Tags.heptatonic]
    },
    {
        name: "lydian minor",
        display: "Lydian Minor",
        tags: [Tags.greekModes, Tags.minor, Tags.heptatonic]
    },
    {
        name: "lydian #9",
        display: "Lydian #9",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "mixolydian",
        display: "Mixolydian",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "mixolydian pentatonic",
        display: "Mixolydian Pentatonic",
        tags: [Tags.greekModes, Tags.pentatonic]
    },
    {
        name: "mixolydian b6",
        display: "Mixolydian B6",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "locrian",
        display: "Locrian",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "locrian pentatonic",
        display: "Locrian Pentatonic",
        tags: [Tags.greekModes, Tags.pentatonic]
    },
    {
        name: "super locrian pentatonic",
        display: "Super Locrian Pentatonic",
        tags: [Tags.greekModes, Tags.pentatonic]
    },
    {
        name: "locrian major",
        display: "Locrian Major",
        tags: [Tags.greekModes, Tags.major, Tags.heptatonic]
    },
    {
        name: "locrian #2",
        display: "Locrian #2",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "ultralocrian",
        display: "Ultralocrian",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "locrian 6",
        display: "Locrian 6",
        tags: [Tags.greekModes, Tags.heptatonic]
    },
    {
        name: "bebop locrian",
        display: "Bebop Locrian",
        tags: [Tags.greekModes, Tags.octatonic]
    },
    {
        name: "ritusen",
        display: "Ritusen",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "egyptian",
        display: "Egyptian",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "neopolitan major pentatonic",
        display: "Neopolitan Major Pentatonic",
        tags: [Tags.nonWestern, Tags.major, Tags.pentatonic]
    },
    {
        name: "vietnamese 1",
        display: "Vietnamese 1",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "pelog",
        display: "Pelog",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "kumoijoshi",
        display: "Kumoijoshi",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "hirajoshi",
        display: "Hirajoshi",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "iwato",
        display: "Iwato",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "in-sen",
        display: "In-sen",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "malkos raga",
        display: "Malkos Raga",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "minor pentatonic",
        display: "Minor Pentatonic",
        tags: [Tags.minor, Tags.pentatonic]
    },
    {
        name: "minor six pentatonic",
        display: "Minor Six Pentatonic",
        tags: [Tags.minor, Tags.pentatonic]
    },
    {
        name: "flat three pentatonic",
        display: "Flat Three Pentatonic",
        tags: [Tags.pentatonic]
    },
    {
        name: "flat six pentatonic",
        display: "Flat Six Pentatonic",
        tags: [Tags.pentatonic]
    },
    {
        name: "scriabin",
        display: "Scriabin",
        tags: [Tags.nonWestern, Tags.pentatonic]
    },
    {
        name: "whole tone pentatonic",
        display: "Whole Tone Pentatonic",
        tags: [Tags.pentatonic]
    },
    {
        name: "minor hexatonic",
        display: "Minor Hexatonic",
        tags: [Tags.minor, Tags.hexatonic]
    },
    {
        name: "augmented",
        display: "Augmented",
        tags: [Tags.augmented, Tags.hexatonic]
    },
    {
        name: "piongio",
        display: "Piongio",
        tags: [Tags.hexatonic]
    },
    {
        name: "prometheus neopolitan",
        display: "Prometheus Neopolitan",
        tags: [Tags.hexatonic, Tags.nonWestern]
    },
    {
        name: "prometheus",
        display: "Prometheus",
        tags: [Tags.hexatonic, Tags.nonWestern]
    },
    {
        name: "mystery #1",
        display: "Mystery #1",
        tags: [Tags.hexatonic]
    },
    {
        name: "six tone symmetric",
        display: "Six Tone Symmetric",
        tags: [Tags.hexatonic]
    },
    {
        name: "whole tone",
        display: "Whole Tone",
        tags: [Tags.hexatonic]
    },
    {
        name: "messiaen's mode #3",
        display: "Messiaen's Mode #3",
        tags: [Tags.nonatonic]
    },
    {
        name: "messiaen's mode #4",
        display: "Messiaen's Mode #4",
        tags: [Tags.octatonic]
    },
    {
        name: "messiaen's mode #5",
        display: "Messiaen's Mode #5",
        tags: [Tags.hexatonic]
    },
    {
        name: "messiaen's mode #6",
        display: "Messiaen's Mode #6",
        tags: [Tags.octatonic]
    },
    {
        name: "messiaen's mode #7",
        display: "Messiaen's Mode #7",
        tags: [Tags.decatonic]
    },
    {
        name: "altered",
        display: "Altered",
        tags: [Tags.heptatonic]
    },
    {
        name: "augmented heptatonic",
        display: "Augmented Heptatonic",
        tags: [Tags.augmented, Tags.heptatonic]
    },
    {
        name: "leading whole tone",
        display: "Leading Whole Tone",
        tags: [Tags.major, Tags.heptatonic]
    },
    {
        name: "balinese",
        display: "Balinese",
        tags: [Tags.nonWestern, Tags.heptatonic]
    },
    {
        name: "neopolitan major",
        display: "Neopolitan Major",
        tags: [Tags.nonWestern, Tags.major, Tags.heptatonic]
    },
    {
        name: "harmonic major",
        display: "Harmonic Major",
        tags: [Tags.major, Tags.heptatonic]
    },
    {
        name: "double harmonic major",
        display: "Double Harmonic Major",
        tags: [Tags.major, Tags.heptatonic]
    },
    {
        name: "hungarian minor",
        display: "Hungarian Minor",
        tags: [Tags.nonWestern, Tags.minor, Tags.heptatonic]
    },
    {
        name: "hungarian major",
        display: "Hungarian Major",
        tags: [Tags.nonWestern, Tags.major, Tags.heptatonic]
    },
    {
        name: "oriental",
        display: "Oriental",
        tags: [Tags.nonWestern, Tags.heptatonic]
    },
    {
        name: "flamenco",
        display: "Flamenco",
        tags: [Tags.heptatonic]
    },
    {
        name: "todi raga",
        display: "Todi Raga",
        tags: [Tags.nonWestern, Tags.heptatonic]
    },
    {
        name: "persian",
        display: "Persian",
        tags: [Tags.nonWestern, Tags.heptatonic]
    },
    {
        name: "enigmatic",
        display: "Enigmatic",
        tags: [Tags.heptatonic]
    },
    {
        name: "major augmented",
        display: "Major Augmented",
        tags: [Tags.major, Tags.augmented, Tags.heptatonic]
    },
    {
        name: "purvi raga",
        display: "Purvi Raga",
        tags: [Tags.nonWestern, Tags.octatonic]
    },
    {
        name: "spanish heptatonic",
        display: "Spanish Heptatonic",
        tags: [Tags.nonWestern, Tags.octatonic]
    },
    {
        name: "bebop minor",
        display: "Bebop Minor",
        tags: [Tags.minor, Tags.octatonic]
    },
    {
        name: "bebop major",
        display: "Bebop Major",
        tags: [Tags.major, Tags.octatonic]
    },
    {
        name: "minor bebop",
        display: "Harmonic Minor Bebop",
        tags: [Tags.minor, Tags.octatonic]
    },
    {
        name: "ichikosucho",
        display: "Ichikosucho",
        tags: [Tags.nonWestern, Tags.major, Tags.octatonic]
    },
    {
        name: "minor six diminished",
        display: "Minor Six Diminished",
        tags: [Tags.minor, Tags.diminished, Tags.octatonic]
    },
    {
        name: "half-whole diminished",
        display: "Half-whole Diminished",
        tags: [Tags.diminished, Tags.octatonic]
    },
    {
        name: "kafi raga",
        display: "Kafi Raga",
        tags: [Tags.nonWestern, Tags.octatonic]
    },
    {
        name: "composite blues",
        display: "Composite Blues",
        tags: [Tags.nonatonic]
    }
]
