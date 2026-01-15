import { useMusic } from "./context/music.jsx";
import Checkbox from "./components/Checkbox.jsx";
import { getResultNotes } from "./lib/music.js";
import { Keys, ResultLengths } from "./lib/musicData.js"

function App() {
    const {setKey, filters, setFilters, scales, setScale, notes, resultLength, setResultLength, resultNotes, setResultNotes} = useMusic();

    function onChange(checkboxIndex) {
        setFilters((current) =>
            current.map((filter, index) =>
                index === checkboxIndex ? {...filter, checked: !filter.checked} : {...filter}
            )
        );
    }

    return (
        <>
            <fieldset>
                <legend>Filter scales:</legend>
                <div>
                    {filters.map((filter, index) =>
                        <Checkbox
                            key={filter.name}
                            name={filter.name}
                            checked={filter.checked}
                            onChange={() => onChange(index)}
                        />
                    )}
                </div>
            </fieldset>

            {scales.length > 0 && (
                <>
                    <fieldset>
                        <legend>Choose a key:</legend>
                        <select onChange={(event) => {
                            const newKey = event.target.value
                            setKey(newKey);
                        }}>
                            {Keys.map((key) => <option key={key} value={key}>{key}</option>)}
                        </select>
                    </fieldset>

                    <fieldset>
                        <legend>Choose length:</legend>
                        <select onChange={(event) => {
                            setResultLength(ResultLengths.filter((resultLength) => resultLength.length === Number(event.target.value))[0])
                        }}>
                            {ResultLengths.map((resultLength) =>
                                <option
                                    key={resultLength.name}
                                    value={resultLength.length}
                                >
                                    {resultLength.name}{resultLength?.length &&` (${resultLength.length})`}
                                </option>
                            )}
                        </select>
                        <h1>{resultLength?.length ? resultLength.length : "Custom"}</h1>
                    </fieldset>

                    <fieldset>
                        <legend>Choose a scale:</legend>
                        <select onChange={(event) => {
                            const newScale = event.target.value;
                            setScale(scales.filter((scaleData) => scaleData.name === newScale)[0]);
                        }}>
                            {scales.map((scale) =>
                                <option key={scale.name} value={scale.name}>{scale.display}</option>)}
                        </select>
                    </fieldset>

                    <fieldset>
                        <legend>Notes:</legend>
                        <h1>{notes.join(", ")}</h1>
                    </fieldset>

                    <fieldset>
                        <legend>Get result:</legend>
                        <button
                            onClick={async () => setResultNotes(await getResultNotes(notes, resultLength))}
                        >
                            FETCH!
                        </button>
                        {resultNotes.length > 0 && <h1>{resultNotes.join(", ")}</h1>}
                    </fieldset>
                </>
            )}
        </>
    );
}

export default App
