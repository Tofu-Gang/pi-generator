import { useMusic } from "../../context/music.jsx";
import { getResultNotes } from "../../lib/music.js";
import Content from "../Content.jsx";

function Result() {
    const {key, scale, notes, resultLength, resultNotes, setResultNotes, Status} = useMusic();

    return (
        <>
            <Content title={"Get Result"} children={
                <button onClick={async () => {
                    const resultNotes = await getResultNotes(notes, resultLength);
                    setResultNotes(resultNotes);
                }}>
                    FETCH
                </button>
            }/>

            {Status.ResultNotes.done &&
                <Content title={`${resultLength?.name} in ${key} ${scale?.name}:`} children={<h1>{resultNotes.join(", ")}</h1>} />
            }
        </>
    );
}

export default Result;
