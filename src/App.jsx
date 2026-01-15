import { useMusic } from "./context/music.jsx";
import Checkbox from "./components/Checkbox.jsx";
import { KEYS } from "./lib/music.js";
import getPiNumbers from "./lib/fetchPI.js";

function App() {
    const {setKey, setScale, scales, notes, filters, setFilters} = useMusic();

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

            <fieldset>
                <legend>Choose a key:</legend>
                <select onChange={(event) => {
                    const newKey = event.target.value
                    setKey(newKey);
                }}>
                    {KEYS.map((key) => <option key={key} value={key}>{key}</option>)}
                </select>
            </fieldset>

            {scales.length > 0 && (
                <>
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
                </>
            )}

            <button onClick={async () => {
                console.log("FETCHED!", await getPiNumbers(7, 50));
            }}>FETCH!
            </button>
        </>
    );
}

export default App
