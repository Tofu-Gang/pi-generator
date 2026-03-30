import { useMusic } from "../../context/music.jsx";
import { Keys } from "../../lib/musicData.js"
import Content from "../Content.jsx";
import Checkbox from "../Checkbox.jsx";

function Key() {
    const {key, setKey} = useMusic();

    return (
        <Content
            title={"Key"}
            children={Keys.map((keyNote) =>
                <Checkbox
                    className={"h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-green-600 checked:bg-green-600"}
                    key={keyNote}
                    name={keyNote}
                    checked={key === keyNote}
                    onChange={() => setKey((current) => (
                        current === keyNote ? null : keyNote
                    ))}
                />
            )}
        />
    );
}

export default Key;
