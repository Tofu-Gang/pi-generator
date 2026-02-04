import { useMusic } from "../context/music.jsx";

function Info() {
    const {key, filters, scale, notes, resultLength, resultNotes} = useMusic();

    return (
        <>
            <div className="grow"></div>
            {key.done() && !scale.done() && <h3 className="p-3">Key: {key.value}</h3>}
            {filters.done() && !scale.done() && <h3 className="p-3">Filters chosen</h3>}
            {key.done() && scale.done() && <h3 className="p-3">Scale: {key.value} {scale.value.display}</h3>}
            {scale.done() && !key.done() && <h3 className="p-3">Scale: {scale.value.display}</h3>}
            {notes.done() && <h3 className="p-3">Notes: {notes.value.join(", ")}</h3>}
            {resultLength.done() && <h3 className="p-3">Result length: {resultLength.value.name}({resultLength.value.length} notes)</h3>}
            {resultNotes.done() && <h3 className="p-3">GO PLAY!</h3>}
            {!key.done() && !scale.done() && !resultLength.done() && !resultNotes.done() && <h3 className="p-3">Pi Generator by TofuGang SW</h3>}
            <div className="grow"></div>
        </>
    );
}

export default Info;
