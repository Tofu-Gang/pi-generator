import { useMusic } from "../context/music.jsx";
import { ResultLengths } from "../lib/musicData.js";
import { Link } from "react-router";

function Length() {
    const {resultLength, setResultLength} = useMusic();

    return (
        <>
            <fieldset>
                <legend>Choose length:</legend>
                {ResultLengths.map((resultLength) =>
                    <button
                        key={resultLength.name}
                        onClick={() => setResultLength(ResultLengths.filter((resultLengthData) =>
                            resultLengthData.name === resultLength.name)[0])}
                    >
                        {resultLength.name}
                    </button>)}
            </fieldset>

            {resultLength &&
                <>
                    <fieldset>
                        <legend>The Length</legend>
                        <h1>{resultLength?.length && `${resultLength.name}: `} {resultLength?.length ? resultLength.length : "Custom"}</h1>
                    </fieldset>

                    <fieldset>
                        <legend>Next</legend>
                        <Link to="/result">Get Result</Link>
                    </fieldset>
                </>
            }
        </>
    );
}

export default Length;
