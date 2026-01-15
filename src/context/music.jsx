import { useState, createContext, useContext } from "react";
import { getScaleNotes, KEYS } from "../lib/music.js";
import { ScalesData, TAGS } from "../lib/scalesData.js";

const MusicContext = createContext();

export function MusicProvider({ children }) {
    const [key, setKey] = useState(KEYS[0]);
    const [scale, setScale] = useState(ScalesData[0].name);
    const [notes, setNotes] = useState(getScaleNotes(key, scale));
    const [filters, setFilters] = useState(Object.values(TAGS).map((name) =>
        ({name, checked : false})));

    return <MusicContext.Provider value={{key, setKey, scale, setScale, notes, setNotes, filters, setFilters}}>{children}</MusicContext.Provider>
}

export function useMusic() {
    return useContext(MusicContext);
}
