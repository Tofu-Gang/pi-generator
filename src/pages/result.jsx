import { useMusic } from "../context/music.jsx";
import { getResultNotes } from "../lib/music.js";

function Result() {
    const {notes, resultLength, resultNotes, setResultNotes} = useMusic();

    return (
        <>
            <fieldset>
                <legend>Get result:</legend>
                <button
                    onClick={async () => setResultNotes(await getResultNotes(notes, resultLength))}
                >
                    FETCH!
                </button>
            </fieldset>

            {resultNotes.length > 0 &&
                <fieldset>
                    <h1>{resultNotes.join(", ")}</h1>
                </fieldset>
            }
        </>
    );
}

export default Result;
