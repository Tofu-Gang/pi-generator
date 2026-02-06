import { useMusic } from "../context/music.jsx";
import { getResultNotes } from "../lib/music.js";
import Content from "../components/Content.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";
import Button from "../components/Button.jsx";

function Result() {
    const {notes, resultLength, resultNotes, setResultNotes} = useMusic();

    return (
        <div className="h-full">
            <Content title={"Get result:"} children={
                <Button
                    available={resultNotes.available()}
                    done={resultNotes.done()}
                    isCurrentPage={true}
                    display={"FETCH!"}
                    onClick={async () => {
                        const resultNotes = await getResultNotes(notes.value, resultLength.value);
                        setResultNotes((current) => ({
                            ...current,
                            value: resultNotes,
                        }))
                    }}
                />
            }/>

            {resultNotes.done() &&
                <Content title={"Result Notes:"} children={<h1>{resultNotes.value.join(", ")}</h1>} />
            }
            <AvailableLinks />
        </div>
    );
}

export default Result;
