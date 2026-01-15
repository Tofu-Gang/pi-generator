import { useMusic } from "../context/music.jsx";
import { ResultLengths } from "../lib/musicData.js";
import { Link } from "react-router";

function Length() {
    const {resultLength, setResultLength} = useMusic();

    return (
        <fieldset>
            <legend>Choose length:</legend>
            <select onChange={(event) => {
                setResultLength(ResultLengths.filter((resultLength) => resultLength.length === Number(event.target.value))[0])
            }}>
                {ResultLengths.map((resultLength) =>
                    <option
                        key={resultLength.name}
                        value={resultLength.length}
                    >
                        {resultLength.name}{resultLength?.length && ` (${resultLength.length})`}
                    </option>
                )}
            </select>
            <fieldset>
                <legend>The Length</legend>
                <h1>{resultLength?.length ? resultLength.length : "Custom"}</h1>
            </fieldset>
            <fieldset>
                <legend>Next</legend>
                <Link to="/result">Get Result</Link>
            </fieldset>
        </fieldset>
    );
}

export default Length;
