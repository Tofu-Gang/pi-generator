import { useMusic } from "../context/music.jsx";
import { getResultNotes } from "../lib/music.js";
import Content from "../components/Content.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";

function Result() {
    const {notes, resultLength, resultNotes, setResultNotes} = useMusic();

    return (
        <div className="h-full">
            <Content title={"Get result:"} children={
                <button
                    onClick={async () => {
                        const resultNotes = await getResultNotes(notes.value, resultLength.value);
                        setResultNotes((current) => ({
                            ...current,
                            value: resultNotes,
                        }))
                    }}
                >
                    FETCH!
                </button>
            }/>

            {resultNotes.done() &&
                <Content title={"Result Notes:"} children={<h1>{resultNotes.value.join(", ")}</h1>} />
            }
            <AvailableLinks />
        </div>
    );
}

export default Result;
