import { useState, useEffect, createContext, useContext } from "react";
import { getResultNotes, getScaleNotes, getScalesFiltered } from "../lib/music.js";
import { Tags } from "../lib/musicData.js";

const MusicContext = createContext();

export const Defaults = {
    key: null,
    filters: Object.values(Tags).map((name) => ({name, checked : false})),
    scales: [],
    scale: null,
    notes: [],
    resultLength: null,
    resultNotes: []
}

export function MusicProvider({ children }) {
    const [key, setKey] = useState(Defaults.key);
    const [filters, setFilters] = useState(Defaults.filters);
    const [scale, setScale] = useState(Defaults.scale);
    const [resultLength, setResultLength] = useState(Defaults.resultLength);
    const [resultNotes, setResultNotes] = useState(Defaults.resultNotes);

    // cannot reference State inside State definition, these must be created before State definition then
    const keyDone = !!key;
    const scales = getScalesFiltered(filters);
    const scalesDone = scales.length > 0;
    const scaleDone = !!scale;
    const notesAvailable = keyDone && scaleDone;
    const notes = notesAvailable ? getScaleNotes(key, scale.name) : Defaults.notes;
    const resultLengthDone = !!resultLength;

    const Status = {
        Key: {
            available: true,
            done: keyDone
        },
        Filters: {
            available: true,
            done: filters.some((filter) => filter.checked)
        },
        Scales: {
            done: scalesDone
        },
        Scale: {
            available: scalesDone,
            done: scaleDone
        },
        Notes: {
            available: keyDone && scaleDone,
            done: notes.length > 0
        },
        ResultLength: {
            available: true,
            done: resultLengthDone
        },
        ResultNotes: {
            available: keyDone && scaleDone && resultLengthDone,
            done: resultNotes.length > 0
        }
    }

    // update available scales based on selected filters
    useEffect(() => {
        if(!scales.map((scaleData) => scaleData.name).includes(scale?.name)) {
            // clear selected scale if it is no longer available based on selected filters
            setScale(Defaults.scale);
        }
    }, [filters]);

    useEffect(() => {
        if(Status.ResultNotes.available) {
            fetchResultNotes();
        } else {
            // clear result notes if any state that result notes depend on changes
            setResultNotes(Defaults.resultNotes);
        }
    }, [key, scale, resultLength])

    function resetAll() {
        setKey(Defaults.key);
        setFilters(Defaults.filters);
        setScale(Defaults.scale);
        setResultLength(Defaults.resultLength);
        setResultNotes(Defaults.resultNotes);
    }

    async function fetchResultNotes() {
        const resultNotes = await getResultNotes(notes, resultLength);
        setResultNotes(resultNotes);
    }

    return <MusicContext.Provider
        value={{
            key, setKey,
            filters, setFilters,
            scales,
            scale, setScale,
            notes,
            resultLength, setResultLength,
            resultNotes, setResultNotes,
            Status,
            resetAll,
            fetchResultNotes
        }}
    >
        {children}
    </MusicContext.Provider>
}

export function useMusic() {
    return useContext(MusicContext);
}
