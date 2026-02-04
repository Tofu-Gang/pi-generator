import { useMusic } from "../context/music.jsx";
import { Keys } from "../lib/musicData.js"
import Content from "../components/Content.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";

function Key() {
    const {setKey} = useMusic();

    return (
        <div className="h-full">
            <Content
                title={"Choose a key:"}
                children={Keys.map((keyNote) =>
                    <button
                        key={keyNote}
                        onClick={() => {
                            setKey((current) => ({
                                ...current,
                                value: keyNote
                            }));
                        }}
                    >
                        {keyNote}
                    </button>
                )}
            />
            <AvailableLinks />
        </div>
    );
}

export default Key;
