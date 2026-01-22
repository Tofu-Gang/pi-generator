import { useState, useEffect, createContext, useContext } from "react";
import { getScaleNotes, getScalesFiltered } from "../lib/music.js";
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
    const [scales, setScales] = useState(Defaults.scales);
    const [scale, setScale] = useState(Defaults.scale);
    const [notes, setNotes] = useState(Defaults.notes);
    const [resultLength, setResultLength] = useState(Defaults.resultLength);
    const [resultNotes, setResultNotes] = useState(Defaults.resultNotes);

    useEffect(() => {
        setScales(getScalesFiltered(filters));
    }, [filters]);

    useEffect(() => {
        if(!scales.map((scale) => scale.name).includes(scale?.name)) {
            setScale(Defaults.scale);
        }
    }, [scales]);

    useEffect(() => {
        if(key && scale) {
            setNotes(getScaleNotes(key, scale.name));
        } else {
            setNotes(Defaults.notes);
        }
    }, [key, scale]);

    return <MusicContext.Provider
        value={{
            key, setKey,
            filters, setFilters,
            scales, setScales,
            scale, setScale,
            notes, setNotes,
            resultLength, setResultLength,
            resultNotes, setResultNotes
        }}
    >
        {children}
    </MusicContext.Provider>
}

export function useMusic() {
    return useContext(MusicContext);
}
