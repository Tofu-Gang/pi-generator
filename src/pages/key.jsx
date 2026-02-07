import { useMusic } from "../context/music.jsx";
import { Keys } from "../lib/musicData.js"
import Content from "../components/Content.jsx";
import Checkbox from "../components/Checkbox.jsx";
import PageContent from "../components/PageContent.jsx";

function Key() {
    const {key, setKey} = useMusic();

    return (
        <PageContent children={
            <Content
                title={"Set key:"}
                children={Keys.map((keyNote) =>
                    <Checkbox
                        className={"h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-green-600 checked:bg-green-600"}
                        key={keyNote}
                        name={keyNote}
                        checked={key.value === keyNote}
                        onChange={() => setKey((current) => ({
                            ...current,
                            value: current.value === keyNote ? null : keyNote
                        }))}
                    />
                )}
            />
        } />
    );
}

export default Key;
