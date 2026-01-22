import { useMusic } from "../context/music.jsx";

function Info() {
    const {key, filters, scale, notes, resultLength, resultNotes} = useMusic();

    return (
        <>
            <div className="grow"></div>
            {key && <h3 className="p-3">Key: {key}</h3>}
            {filters.filter((filter) => filter.checked).length > 0 && <h3 className="p-3">Filters chosen</h3>}
            {key && scale && <h3 className="p-3">Scale: {key} {scale.display}</h3>}
            {notes.length > 0 && <h3 className="p-3">Notes: {notes.join(", ")}</h3>}
            {resultLength?.length && <h3 className="p-3">Result length: {resultLength.name}({resultLength.length} notes)</h3>}
            {resultNotes.length > 0 && <h3 className="p-3">GO PLAY!</h3>}
            <div className="grow"></div>
        </>
    );
}

export default Info;
