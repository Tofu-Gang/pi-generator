import { useMusic } from "../context/music.jsx";
import { getResultNotes } from "../lib/music.js";
import Content from "../components/Content.jsx";

function Result() {
    const {notes, resultLength, resultNotes, setResultNotes} = useMusic();

    return (
        <>
            <Content title={"Get result:"} children={
                <button
                    onClick={async () => setResultNotes(await getResultNotes(notes, resultLength))}
                >
                    FETCH!
                </button>
            }/>

            {resultNotes.length > 0 &&
                <Content title={"Result Notes:"} children={<h1>{resultNotes.join(", ")}</h1>} />
            }
        </>
    );
}

export default Result;
