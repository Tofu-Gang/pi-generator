import { useMusic } from "../../context/music.jsx";
import Content from "../Content.jsx";

function Result() {
    const {key, scale, resultLength, resultNotes, Status, fetchResultNotes} = useMusic();

    return (
        <>
            <Content title={"Get Result"} children={
                <button onClick={async () => {
                    await fetchResultNotes();
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
