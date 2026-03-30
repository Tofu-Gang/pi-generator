import {useMusic} from "../context/music.jsx";

function Header() {
    const { Status } = useMusic();
    return (
        <div className="fixed top-0 w-full flex items-center justify-center border-b border-green-600 bg-black">
            {/*<div className="p-3">PI GENERATOR</div>*/}
            <p className="p-3">Key {Status.Key.available && "Available"} {Status.Key.done && "Done"}</p>
            <p className="p-3">Filters {Status.Filters.available && "Available"} {Status.Filters.done && "Done"}</p>
            <p className="p-3">Scale {Status.Scale.available && "Available"} {Status.Scale.done && "Done"}</p>
            <p className="p-3">Result Length {Status.ResultLength.available && "Available"} {Status.ResultLength.done && "Done"}</p>
            <p className="p-3">Result Notes {Status.ResultNotes.available && "Available"} {Status.ResultNotes.done && "Done"}</p>
        </div>
    );
}

export default Header;
