import { useMusic } from "../../context/music.jsx";
import { getResultNotes } from "../../lib/music.js";
import Content from "../Content.jsx";
import PageContent from "../PageContent.jsx";

function Result() {
    const {key, scale, notes, resultLength, resultNotes, setResultNotes} = useMusic();

    return (
        <PageContent children={
            <>
                <Content title={"Get result:"} children={
                    <button onClick={async () => {
                        const resultNotes = await getResultNotes(notes.value, resultLength.value);
                        setResultNotes((current) => ({
                            ...current,
                            value: resultNotes
                        }));
                    }}>
                        FETCH
                    </button>
                }/>

                {resultNotes.done() &&
                    <Content title={`${resultLength.value.name} in ${key.value} ${scale.value.name}:`} children={<h1>{resultNotes.value.join(", ")}</h1>} />
                }
            </>
        } />
    );
}

export default Result;
