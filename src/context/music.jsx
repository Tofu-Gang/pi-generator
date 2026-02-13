import { useState, useEffect, createContext, useContext } from "react";
import { getScaleNotes, getScalesFiltered } from "../lib/music.js";
import { Tags } from "../lib/musicData.js";
import {PiGeneratorRoutes} from "../App.jsx";

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
    const [key, setKey] = useState({
        value: Defaults.key,
        available() {
            return true;
        },
        done() {
            return !!this.value;
        }
    });

    const [filters, setFilters] = useState({
        value: Defaults.filters,
        available() {
            return true;
        },
        done() {
            return this.value.some((filter) => filter.checked);
        }
    });

    const [scales, setScales] = useState({
        value: Defaults.scales,
        done() {
            return this.value.length > 0;
        }
    });

    const [scale, setScale] = useState({
        value: Defaults.scale,
        available() {
            return scales.done();
        },
        done() {
            return !!this.value;
        }
    });

    const [notes, setNotes] = useState({
        value: Defaults.notes,
        done() {
            return this.value.length > 0;
        }
    });

    const [resultLength, setResultLength] = useState({
        value: Defaults.resultLength,
        available() {
            return true;
        },
        done() {
            return !!this.value;
        }
    });

    const [resultNotes, setResultNotes] = useState({
        value: Defaults.resultNotes,
        available() {
            return key.done() && scale.done() && resultLength.done();
        },
        done() {
            return this.value.length > 0
        }
    });

    function resetAll() {
        setKey((current) => ({
            ...current,
            value: Defaults.key
        }));
        setFilters((current) => ({
            ...current,
            value: Defaults.filters
        }));
        setScales((current) => ({
            ...current,
            value: Defaults.scales
        }));
        setScale((current) => ({
            ...current,
            value: Defaults.scale
        }));
        setNotes((current) => ({
            ...current,
            value: Defaults.notes
        }));
        setResultLength((current) => ({
            ...current,
            value: Defaults.resultLength

        }));
        setResultNotes((current) => ({
            ...current,
            value: Defaults.resultNotes
        }));
    }

    const Breadcrumbs = [
        {
            display: "Home",
            state: {
                available() {
                    return true;
                },
                done() {
                    return true;
                }
            },
            path: PiGeneratorRoutes.Home.path
        },
        {
            display: "Key",
            state: key,
            path: PiGeneratorRoutes.Key.path
        },
        {
            display: "Filters",
            state: filters,
            path: PiGeneratorRoutes.Filters.path
        },
        {
            display: "Scale",
            state: scale,
            path: PiGeneratorRoutes.Scale.path
        },
        {
            display: "Result Length",
            state: resultLength,
            path: PiGeneratorRoutes.ResultLength.path
        },
        {
            display: "Result Notes",
            state: resultNotes,
            path: PiGeneratorRoutes.ResultNotes.path
        }
    ];

    useEffect(() => {
        // update available scales based on selected filters
        setScales((current) => ({
            ...current,
            value: getScalesFiltered(filters.value)
        }));
    }, [filters]);

    useEffect(() => {
        setScale((current) => ({
            ...current,
            // clear selected scale if it is no longer available based on selected filters
            ...(!scales.value.map((scaleData) => scaleData.name).includes(scale.value?.name) && {value: Defaults.scale}),
            // referencing other states for availability flag causes the need to refresh this in an effect, otherwise
            // stale value is returned
            available() {
                return scales.done();
            }
        }));
    }, [scales]);

    useEffect(() => {
        setNotes((current) => ({
            ...current,
            // scale notes can be generated only if key and scale is already selected
            ...(key.done() && scale.done() ?
                {value: getScaleNotes(key.value, scale.value.name)} :
                {value: Defaults.notes})
        }));
    }, [key, scale]);

    useEffect(() => {
        setResultNotes((current) => ({
            ...current,
            // referencing other states for availability flag causes the need to refresh this in an effect, otherwise
            // stale value is returned
            available() {
                return key.done() && scale.done() && resultLength.done();
            }
        }));
        if(resultNotes.done()) {
            // generated notes depend on multiple states; clear generated notes if any of the states changes
            setResultNotes((current) => ({
                ...current,
                value: Defaults.resultNotes
            }))
        }
    }, [key, scale, resultLength])

    return <MusicContext.Provider
        value={{
            key, setKey,
            filters, setFilters,
            scales, setScales,
            scale, setScale,
            notes, setNotes,
            resultLength, setResultLength,
            resultNotes, setResultNotes,
            links: Breadcrumbs,
            resetAll
        }}
    >
        {children}
    </MusicContext.Provider>
}

export function useMusic() {
    return useContext(MusicContext);
}
