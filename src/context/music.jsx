import { useState, useEffect, createContext, useContext } from "react";
import { getScaleNotes, getScalesFiltered, KEYS } from "../lib/music.js";
import { TAGS } from "../lib/scalesData.js";

const MusicContext = createContext();

export function MusicProvider({ children }) {
    const [key, setKey] = useState(KEYS[0]);
    const [scale, setScale] = useState({});
    const [scales, setScales] = useState([]);
    const [notes, setNotes] = useState([]);
    const [filters, setFilters] = useState(Object.values(TAGS).map((name) => ({name, checked : false})));

    useEffect(() => {
        setScales(getScalesFiltered(filters));
    }, [filters]);

    useEffect(() => {
        if(scales.length === 0) {
            setScale({})
        } else {
            setScale((current) =>
                scales.map((scale) => scale.name)
                    .includes(current.name) ? current : scales[0])
        }
    }, [scales]);

    useEffect(() => {
        setNotes(getScaleNotes(key, scale.name));
    }, [key, scale]);

    return <MusicContext.Provider value={{key, setKey, scale, setScale, scales, setScales, notes, setNotes, filters, setFilters}}>{children}</MusicContext.Provider>
}

export function useMusic() {
    return useContext(MusicContext);
}
