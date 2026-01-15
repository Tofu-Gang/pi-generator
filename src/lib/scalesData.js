export const TAGS = {
    major: "major",
    minor: "minor",
    nonWestern: "non-western",
    greekModes: "greek modes",
    diminished: "diminished",
    augmented: "augmented",
    pentatonic: "pentatonic",
    hexatonic: "hexatonic",
    heptatonic: "heptatonic",
    octatonic: "octatonic",
    nonatonic: "nonatonic",
    decatonic: "decatonic"
}

export const ScalesData = [
    {
        name: "major pentatonic",
        display: "Major Pentatonic",
        tags: [TAGS.major, TAGS.pentatonic]
    },
    {
        name: "major",
        display: "Major",
        tags: [TAGS.major, TAGS.heptatonic]
    },
    {
        name: "minor",
        display: "Minor",
        tags: [TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "major blues",
        display: "Major Blues",
        tags: [TAGS.major, TAGS.hexatonic]
    },
    {
        name: "minor blues",
        display: "Minor Blues",
        tags: [TAGS.minor, TAGS.hexatonic]
    },
    {
        name: "melodic minor",
        display: "Melodic Minor",
        tags: [TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "harmonic minor",
        display: "Harmonic Minor",
        tags: [TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "bebop",
        display: "Bebop",
        tags: [TAGS.octatonic]
    },
    {
        name: "diminished",
        display: "Diminished",
        tags: [TAGS.diminished, TAGS.octatonic]
    },
    {
        name: "ionian pentatonic",
        display: "Ionian Pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "dorian",
        display: "Dorian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "dorian b2",
        display: "Dorian B2",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "dorian #4",
        display: "Dorian #4",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "phrygian",
        display: "Phrygian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "phrygian dominant",
        display: "Phrygian Dominant",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "lydian",
        display: "Lydian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "lydian pentatonic",
        display: "Lydian Pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "lydian dominant pentatonic",
        display: "Lydian Dominant Pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "double harmonic lydian",
        display: "Double Harmonic Lydian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "lydian dominant",
        display: "Lydian Dominant",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "lydian augmented",
        display: "Lydian Augmented",
        tags: [TAGS.greekModes, TAGS.augmented, TAGS.heptatonic]
    },
    {
        name: "lydian diminished",
        display: "Lydian Diminished",
        tags: [TAGS.greekModes, TAGS.diminished, TAGS.heptatonic]
    },
    {
        name: "lydian minor",
        display: "Lydian Minor",
        tags: [TAGS.greekModes, TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "lydian #9",
        display: "Lydian #9",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "mixolydian",
        display: "Mixolydian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "mixolydian pentatonic",
        display: "Mixolydian Pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "mixolydian b6",
        display: "Mixolydian B6",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "locrian",
        display: "Locrian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "locrian pentatonic",
        display: "Locrian Pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "super locrian pentatonic",
        display: "Super Locrian Pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "locrian major",
        display: "Locrian Major",
        tags: [TAGS.greekModes, TAGS.major, TAGS.heptatonic]
    },
    {
        name: "locrian #2",
        display: "Locrian #2",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "ultralocrian",
        display: "Ultralocrian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "locrian 6",
        display: "Locrian 6",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "bebop locrian",
        display: "Bebop Locrian",
        tags: [TAGS.greekModes, TAGS.octatonic]
    },
    {
        name: "ritusen",
        display: "Ritusen",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "egyptian",
        display: "Egyptian",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "neopolitan major pentatonic",
        display: "Neopolitan Major Pentatonic",
        tags: [TAGS.nonWestern, TAGS.major, TAGS.pentatonic]
    },
    {
        name: "vietnamese 1",
        display: "Vietnamese 1",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "pelog",
        display: "Pelog",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "kumoijoshi",
        display: "Kumoijoshi",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "hirajoshi",
        display: "Hirajoshi",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "iwato",
        display: "Iwato",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "in-sen",
        display: "In-sen",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "malkos raga",
        display: "Malkos Raga",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "minor pentatonic",
        display: "Minor Pentatonic",
        tags: [TAGS.minor, TAGS.pentatonic]
    },
    {
        name: "minor six pentatonic",
        display: "Minor Six Pentatonic",
        tags: [TAGS.minor, TAGS.pentatonic]
    },
    {
        name: "flat three pentatonic",
        display: "Flat Three Pentatonic",
        tags: [TAGS.pentatonic]
    },
    {
        name: "flat six pentatonic",
        display: "Flat Six Pentatonic",
        tags: [TAGS.pentatonic]
    },
    {
        name: "scriabin",
        display: "Scriabin",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "whole tone pentatonic",
        display: "Whole Tone Pentatonic",
        tags: [TAGS.pentatonic]
    },
    {
        name: "minor hexatonic",
        display: "Minor Hexatonic",
        tags: [TAGS.minor, TAGS.hexatonic]
    },
    {
        name: "augmented",
        display: "Augmented",
        tags: [TAGS.augmented, TAGS.hexatonic]
    },
    {
        name: "piongio",
        display: "Piongio",
        tags: [TAGS.hexatonic]
    },
    {
        name: "prometheus neopolitan",
        display: "Prometheus Neopolitan",
        tags: [TAGS.hexatonic, TAGS.nonWestern]
    },
    {
        name: "prometheus",
        display: "Prometheus",
        tags: [TAGS.hexatonic, TAGS.nonWestern]
    },
    {
        name: "mystery #1",
        display: "Mystery #1",
        tags: [TAGS.hexatonic]
    },
    {
        name: "six tone symmetric",
        display: "Six Tone Symmetric",
        tags: [TAGS.hexatonic]
    },
    {
        name: "whole tone",
        display: "Whole Tone",
        tags: [TAGS.hexatonic]
    },
    {
        name: "messiaen's mode #3",
        display: "Messiaen's Mode #3",
        tags: [TAGS.nonatonic]
    },
    {
        name: "messiaen's mode #4",
        display: "Messiaen's Mode #4",
        tags: [TAGS.octatonic]
    },
    {
        name: "messiaen's mode #5",
        display: "Messiaen's Mode #5",
        tags: [TAGS.hexatonic]
    },
    {
        name: "messiaen's mode #6",
        display: "Messiaen's Mode #6",
        tags: [TAGS.octatonic]
    },
    {
        name: "messiaen's mode #7",
        display: "Messiaen's Mode #7",
        tags: [TAGS.decatonic]
    },
    {
        name: "altered",
        display: "Altered",
        tags: [TAGS.heptatonic]
    },
    {
        name: "augmented heptatonic",
        display: "Augmented Heptatonic",
        tags: [TAGS.augmented, TAGS.heptatonic]
    },
    {
        name: "leading whole tone",
        display: "Leading Whole Tone",
        tags: [TAGS.major, TAGS.heptatonic]
    },
    {
        name: "balinese",
        display: "Balinese",
        tags: [TAGS.nonWestern, TAGS.heptatonic]
    },
    {
        name: "neopolitan major",
        display: "Neopolitan Major",
        tags: [TAGS.nonWestern, TAGS.major, TAGS.heptatonic]
    },
    {
        name: "harmonic major",
        display: "Harmonic Major",
        tags: [TAGS.major, TAGS.heptatonic]
    },
    {
        name: "double harmonic major",
        display: "Double Harmonic Major",
        tags: [TAGS.major, TAGS.heptatonic]
    },
    {
        name: "hungarian minor",
        display: "Hungarian Minor",
        tags: [TAGS.nonWestern, TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "hungarian major",
        display: "Hungarian Major",
        tags: [TAGS.nonWestern, TAGS.major, TAGS.heptatonic]
    },
    {
        name: "oriental",
        display: "Oriental",
        tags: [TAGS.nonWestern, TAGS.heptatonic]
    },
    {
        name: "flamenco",
        display: "Flamenco",
        tags: [TAGS.heptatonic]
    },
    {
        name: "todi raga",
        display: "Todi Raga",
        tags: [TAGS.nonWestern, TAGS.heptatonic]
    },
    {
        name: "persian",
        display: "Persian",
        tags: [TAGS.nonWestern, TAGS.heptatonic]
    },
    {
        name: "enigmatic",
        display: "Enigmatic",
        tags: [TAGS.heptatonic]
    },
    {
        name: "major augmented",
        display: "Major Augmented",
        tags: [TAGS.major, TAGS.augmented, TAGS.heptatonic]
    },
    {
        name: "purvi raga",
        display: "Purvi Raga",
        tags: [TAGS.nonWestern, TAGS.octatonic]
    },
    {
        name: "spanish heptatonic",
        display: "Spanish Heptatonic",
        tags: [TAGS.nonWestern, TAGS.octatonic]
    },
    {
        name: "bebop minor",
        display: "Bebop Minor",
        tags: [TAGS.minor, TAGS.octatonic]
    },
    {
        name: "bebop major",
        display: "Bebop Major",
        tags: [TAGS.major, TAGS.octatonic]
    },
    {
        name: "minor bebop",
        display: "Harmonic Minor Bebop",
        tags: [TAGS.minor, TAGS.octatonic]
    },
    {
        name: "ichikosucho",
        display: "Ichikosucho",
        tags: [TAGS.nonWestern, TAGS.major, TAGS.octatonic]
    },
    {
        name: "minor six diminished",
        display: "Minor Six Diminished",
        tags: [TAGS.minor, TAGS.diminished, TAGS.octatonic]
    },
    {
        name: "half-whole diminished",
        display: "Half-whole Diminished",
        tags: [TAGS.diminished, TAGS.octatonic]
    },
    {
        name: "kafi raga",
        display: "Kafi Raga",
        tags: [TAGS.nonWestern, TAGS.octatonic]
    },
    {
        name: "composite blues",
        display: "Composite Blues",
        tags: [TAGS.nonatonic]
    }
]
