import { useMusic } from "../context/music.jsx";
import { Keys } from "../lib/musicData.js"
import { Link } from "react-router";

function Key() {
    const {setKey} = useMusic();

    return (
        <>
            <fieldset>
                <legend>Choose a key:</legend>
                <select onChange={(event) => {
                    const newKey = event.target.value
                    setKey(newKey);
                }}>
                    {Keys.map((key) => <option key={key} value={key}>{key}</option>)}
                </select>
            </fieldset>
            <fieldset>
                <legend>Next</legend>
                <Link to="/filters">Filter Scales</Link>
            </fieldset>
        </>
    );
}

export default Key;
