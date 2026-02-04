import { useEffect } from "react";
import { useMusic, Defaults } from "../context/music.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";

function Home() {
    const {setKey, setFilters, setScales, setScale, setNotes, setResultLength, setResultNotes} = useMusic();

    useEffect(() => {
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
    }, []);

    return (
        <div className="h-full">
            <h1>HOME</h1>
            <AvailableLinks />
        </div>
    );
}

export default Home;
