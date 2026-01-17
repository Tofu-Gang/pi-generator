import { useMusic } from "../context/music.jsx";
import { Keys } from "../lib/musicData.js"
import { Link } from "react-router";

function Key() {
    const {key, setKey} = useMusic();

    return (
        <>
            <fieldset>
                <legend>Choose a key:</legend>
                {Keys.map((key) => <button key={key} onClick={() => setKey(key)}>{key}</button>)}
            </fieldset>

            {key &&
                <>
                    <fieldset>
                        <legend>Key</legend>
                        <h1>{key}</h1>
                    </fieldset>

                    <fieldset>
                        <legend>Next</legend>
                        <Link to="/filters">Filter Scales</Link>
                    </fieldset>
                </>
            }
        </>
    );
}

export default Key;
