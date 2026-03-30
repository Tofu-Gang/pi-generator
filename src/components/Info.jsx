import { useMusic } from "../context/music.jsx";

function Info() {
    const {key, scale, notes, resultLength, Status} = useMusic();
    let infoText = `
        ${!Status.ResultNotes.done && Status.Key.done && !Status.Scale.done ? `Key: ${key}` : ""}
        ${!Status.ResultNotes.done && Status.Filters.done && !Status.Scale.done ? "Filters chosen" : ""}
        ${!Status.ResultNotes.done && Status.Key.done && Status.Scale.done ? `Scale: ${key} ${scale.display}` : ""}
        ${!Status.ResultNotes.done && Status.Scale.done && !Status.Key.done ? `Scale: ${scale.display}` : ""}
        ${!Status.ResultNotes.done && Status.Notes.done ? `Notes: ${notes.join(", ")}` : ""}
        ${!Status.ResultNotes.done && Status.ResultLength.done ? `Result length: ${resultLength.name} (${resultLength.length} notes)` : ""}
        ${Status.ResultNotes.done ? "GO PLAY RIGHT NOW, I'M SERIOUS!" : ""}
        ${!Status.Key.done && !Status.Scale.done && !Status.ResultLength.done && !Status.ResultNotes.done ? "Pi Generator by TofuGang SW" : ""}
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
