import { useMusic } from "../context/music.jsx";
import { Link } from "react-router";

function Scale() {
    const {scales, setScale, notes} = useMusic();

    return (
        <>
            <fieldset>
                <legend>Choose a scale:</legend>
                <select onChange={(event) => {
                    const newScale = event.target.value;
                    setScale(scales.filter((scaleData) => scaleData.name === newScale)[0]);
                }}>
                    {scales.map((scale) =>
                        <option key={scale.name} value={scale.name}>{scale.display}</option>)}
                </select>
            </fieldset>
            <fieldset>
                <legend>Notes:</legend>
                <h1>{notes.join(", ")}</h1>
            </fieldset>
            <fieldset>
                <legend>Next</legend>
                <Link to="/length">Choose Length</Link>
            </fieldset>
        </>
    );
}

export default Scale;
