import { useEffect } from "react";
import { useMusic, Defaults } from "../context/music.jsx";
import { Link } from "react-router";

function Home() {
    const {setKey, setFilters, setScales, setScale, setNotes, setResultLength, setResultNotes} = useMusic();

    useEffect(() => {
        setKey(Defaults.key);
        setFilters(Defaults.filters);
        setScales(Defaults.scales);
        setScale(Defaults.scale);
        setNotes(Defaults.notes);
        setResultLength(Defaults.resultLength);
        setResultNotes(Defaults.resultNotes);
    }, []);

    return (
        <>
            <h1>HOME</h1>

            <fieldset>
                <legend>Next</legend>
                <Link to="/key">Choose Key</Link>
            </fieldset>
        </>
    );
}

export default Home;
