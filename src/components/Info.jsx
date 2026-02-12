import { useMusic } from "../context/music.jsx";

function Info() {
    const {key, filters, scale, notes, resultLength, resultNotes} = useMusic();
    let infoText = `
        ${!resultNotes.done() && key.done() && !scale.done() ? `Key: ${key.value}` : ""}
        ${!resultNotes.done() && filters.done() && !scale.done() ? "Filters chosen" : ""}
        ${!resultNotes.done() && key.done() && scale.done() ? `Scale: ${key.value} ${scale.value.display}` : ""}
        ${!resultNotes.done() && scale.done() && !key.done() ? `Scale: ${scale.value.display}` : ""}
        ${!resultNotes.done() && notes.done() ? `Notes: ${notes.value.join(", ")}` : ""}
        ${!resultNotes.done() && resultLength.done() ? `Result length: ${resultLength.value.name} (${resultLength.value.length} notes)` : ""}
        ${resultNotes.done() ? "GO PLAY RIGHT NOW, I'M SERIOUS!" : ""}
        ${!key.done() && !scale.done() && !resultLength.done() && !resultNotes.done() ? "Pi Generator by TofuGang SW" : ""}
    `;

    return (
        <div className="flex">
            <div className="grow"></div>
            <p className="p-3 whitespace-nowrap">{infoText}</p>
            <div className="grow"></div>
        </div>
    );
}

export default Info;
