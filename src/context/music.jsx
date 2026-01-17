import { useState, useEffect, createContext, useContext } from "react";
import { getScaleNotes, getScalesFiltered } from "../lib/music.js";
import { Tags } from "../lib/musicData.js";

const MusicContext = createContext();
const Defaults = {

}

export function MusicProvider({ children }) {
    const [key, setKey] = useState(null);
    const [filters, setFilters] = useState(Object.values(Tags).map((name) => ({name, checked : false})));
    const [scales, setScales] = useState([]);
    const [scale, setScale] = useState(null);
    const [notes, setNotes] = useState([]);
    const [resultLength, setResultLength] = useState(null);
    const [resultNotes, setResultNotes] = useState([]);

    useEffect(() => {
        setScales(getScalesFiltered(filters));
    }, [filters]);

    useEffect(() => {
        if(key && scale) {
            setNotes(getScaleNotes(key, scale.name));
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
