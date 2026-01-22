import { useEffect } from "react";
import { useMusic, Defaults } from "../context/music.jsx";
import { Link } from "react-router";
import { PiGeneratorRoutes } from "../App.jsx";

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
        <div className="h-full">
            <h1>HOME</h1>

            <fieldset>
                <legend>Next</legend>
                <Link to={PiGeneratorRoutes.Key.path} >Choose Key</Link>
            </fieldset>
        </div>
    );
}

export default Home;
