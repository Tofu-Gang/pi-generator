import { useMusic } from "../context/music.jsx";
import { getResultNotes } from "../lib/music.js";
import Content from "../components/Content.jsx";
import Button from "../components/Button.jsx";
import PageContent from "../components/PageContent.jsx";

function Result() {
    const {key, scale, notes, resultLength, resultNotes, setResultNotes} = useMusic();

    return (
        <PageContent children={
            <>
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
                    <Content title={`${resultLength.value.name} in ${key.value} ${scale.value.name}:`} children={<h1>{resultNotes.value.join(", ")}</h1>} />
                }
            </>
        } />
    );
}

export default Result;
