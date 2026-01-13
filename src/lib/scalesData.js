export const TAGS = {
    major: "major",
    minor: "minor",
    nonWestern: "nonWestern",
    greekModes: "greekModes",
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
        tags: [TAGS.major, TAGS.pentatonic]
    },
    {
        name: "major",
        tags: [TAGS.major, TAGS.heptatonic]
    },
    {
        name: "minor",
        tags: [TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "major blues",
        tags: [TAGS.major, TAGS.hexatonic]
    },
    {
        name: "minor blues",
        tags: [TAGS.minor, TAGS.hexatonic]
    },
    {
        name: "melodic minor",
        tags: [TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "harmonic minor",
        tags: [TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "bebop",
        tags: [TAGS.octatonic]
    },
    {
        name: "diminished",
        tags: [TAGS.diminished, TAGS.octatonic]
    },
    {
        name: "ionian pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "dorian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "dorian b2",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "dorian #4",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "phrygian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "phrygian dominant",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "lydian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "lydian pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "lydian dominant pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "double harmonic lydian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "lydian dominant",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "lydian augmented",
        tags: [TAGS.greekModes, TAGS.augmented, TAGS.heptatonic]
    },
    {
        name: "lydian diminished",
        tags: [TAGS.greekModes, TAGS.diminished, TAGS.heptatonic]
    },
    {
        name: "lydian minor",
        tags: [TAGS.greekModes, TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "lydian #9",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "mixolydian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "mixolydian pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "mixolydian b6",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "locrian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "locrian pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "super locrian pentatonic",
        tags: [TAGS.greekModes, TAGS.pentatonic]
    },
    {
        name: "locrian major",
        tags: [TAGS.greekModes, TAGS.major, TAGS.heptatonic]
    },
    {
        name: "locrian #2",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "ultralocrian",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "locrian 6",
        tags: [TAGS.greekModes, TAGS.heptatonic]
    },
    {
        name: "bebop locrian",
        tags: [TAGS.greekModes, TAGS.octatonic]
    },
    {
        name: "ritusen",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "egyptian",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "neopolitan major pentatonic",
        tags: [TAGS.nonWestern, TAGS.major, TAGS.pentatonic]
    },
    {
        name: "vietnamese 1",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "pelog",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "kumoijoshi",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "hirajoshi",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "iwato",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "in-sen",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "malkos raga",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "minor pentatonic",
        tags: [TAGS.minor, TAGS.pentatonic]
    },
    {
        name: "minor six pentatonic",
        tags: [TAGS.minor, TAGS.pentatonic]
    },
    {
        name: "flat three pentatonic",
        tags: [TAGS.pentatonic]
    },
    {
        name: "flat six pentatonic",
        tags: [TAGS.pentatonic]
    },
    {
        name: "scriabin",
        tags: [TAGS.nonWestern, TAGS.pentatonic]
    },
    {
        name: "whole tone pentatonic",
        tags: [TAGS.pentatonic]
    },
    {
        name: "minor hexatonic",
        tags: [TAGS.minor, TAGS.hexatonic]
    },
    {
        name: "augmented",
        tags: [TAGS.augmented, TAGS.hexatonic]
    },
    {
        name: "piongio",
        tags: [TAGS.hexatonic]
    },
    {
        name: "prometheus neopolitan",
        tags: [TAGS.hexatonic, TAGS.nonWestern]
    },
    {
        name: "prometheus",
        tags: [TAGS.hexatonic, TAGS.nonWestern]
    },
    {
        name: "mystery #1",
        tags: [TAGS.hexatonic]
    },
    {
        name: "six tone symmetric",
        tags: [TAGS.hexatonic]
    },
    {
        name: "whole tone",
        tags: [TAGS.hexatonic]
    },
    {
        name: "messiaen's mode #3",
        tags: [TAGS.nonatonic]
    },
    {
        name: "messiaen's mode #4",
        tags: [TAGS.octatonic]
    },
    {
        name: "messiaen's mode #5",
        tags: [TAGS.hexatonic]
    },
    {
        name: "messiaen's mode #6",
        tags: [TAGS.octatonic]
    },
    {
        name: "messiaen's mode #7",
        tags: [TAGS.decatonic]
    },
    {
        name: "altered",
        tags: [TAGS.heptatonic]
    },
    {
        name: "augmented heptatonic",
        tags: [TAGS.augmented, TAGS.heptatonic]
    },
    {
        name: "leading whole tone",
        tags: [TAGS.major, TAGS.heptatonic]
    },
    {
        name: "balinese",
        tags: [TAGS.nonWestern, TAGS.heptatonic]
    },
    {
        name: "neopolitan major",
        tags: [TAGS.nonWestern, TAGS.major, TAGS.heptatonic]
    },
    {
        name: "harmonic major",
        tags: [TAGS.major, TAGS.heptatonic]
    },
    {
        name: "double harmonic major",
        tags: [TAGS.major, TAGS.heptatonic]
    },
    {
        name: "hungarian minor",
        tags: [TAGS.nonWestern, TAGS.minor, TAGS.heptatonic]
    },
    {
        name: "hungarian major",
        tags: [TAGS.nonWestern, TAGS.major, TAGS.heptatonic]
    },
    {
        name: "oriental",
        tags: [TAGS.nonWestern, TAGS.heptatonic]
    },
    {
        name: "flamenco",
        tags: [TAGS.heptatonic]
    },
    {
        name: "todi raga",
        tags: [TAGS.nonWestern, TAGS.heptatonic]
    },
    {
        name: "persian",
        tags: [TAGS.nonWestern, TAGS.heptatonic]
    },
    {
        name: "enigmatic",
        tags: [TAGS.heptatonic]
    },
    {
        name: "major augmented",
        tags: [TAGS.major, TAGS.augmented, TAGS.heptatonic]
    },
    {
        name: "purvi raga",
        tags: [TAGS.nonWestern, TAGS.octatonic]
    },
    {
        name: "spanish heptatonic",
        tags: [TAGS.nonWestern, TAGS.octatonic]
    },
    {
        name: "bebop minor",
        tags: [TAGS.minor, TAGS.octatonic]
    },
    {
        name: "bebop major",
        tags: [TAGS.major, TAGS.octatonic]
    },
    {
        name: "minor bebop",
        display: "harmonic minor bebop",
        tags: [TAGS.minor, TAGS.octatonic]
    },
    {
        name: "ichikosucho",
        tags: [TAGS.nonWestern, TAGS.major, TAGS.octatonic]
    },
    {
        name: "minor six diminished",
        tags: [TAGS.minor, TAGS.diminished, TAGS.octatonic]
    },
    {
        name: "half-whole diminished",
        tags: [TAGS.diminished, TAGS.octatonic]
    },
    {
        name: "kafi raga",
        tags: [TAGS.nonWestern, TAGS.octatonic]
    },
    {
        name: "composite blues",
        tags: [TAGS.nonatonic]
    }
]
