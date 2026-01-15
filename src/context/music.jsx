import { useState, useEffect, createContext, useContext } from "react";
import { getScaleNotes, getScalesFiltered } from "../lib/music.js";
import { Keys, ResultLengths, Tags } from "../lib/musicData.js";

const MusicContext = createContext();

export function MusicProvider({ children }) {
    const [key, setKey] = useState(Keys[0]);
    const [filters, setFilters] = useState(Object.values(Tags).map((name) => ({name, checked : false})));
    const [scales, setScales] = useState([]);
    const [scale, setScale] = useState({});
    const [notes, setNotes] = useState([]);
    const [resultLength, setResultLength] = useState(ResultLengths[0]);
    const [resultNotes, setResultNotes] = useState([]);

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
