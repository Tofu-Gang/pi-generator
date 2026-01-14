import { useState } from "react";
import getPiNumbers from "./lib/fetchPI.js";
import { getScaleNotes, KEYS } from "./lib/music.js";
import { ScalesData, TAGS } from "./lib/scalesData.js";
import Checkbox from "./components/Checkbox.jsx";

function App() {
    const [key, setKey] = useState(KEYS[0]);
    const [scale, setScale] = useState(ScalesData[0].name);
    const [notes, setNotes] = useState(getScaleNotes(key, scale));
    const [filters, setFilters] = useState(Object.values(TAGS).map((name) =>
        ({name, checked : false})));

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
                <legend>Values:</legend>
                {filters.map((filter, index) => <span key={index}>{filter.checked ? "T " : "F "} {filter.name} | </span>)}
            </fieldset>

            <label htmlFor="key-select">Choose a key:</label>
            <select id="key-select" onChange={(event) => {
                const newKey = event.target.value
                setKey(newKey);
                setNotes(getScaleNotes(newKey, scale));
            }}>
                {KEYS.map((key) => <option key={key} value={key}>{key}</option>)}
            </select>

            <label htmlFor="scale-select">Choose a scale:</label>
            <select id="scale-select" onChange={(event) => {
                const newScale = event.target.value;
                setScale(newScale);
                setNotes(getScaleNotes(key, newScale));
            }}>
                {ScalesData.map((scale) => <option key={scale.name} value={scale?.display || scale.name}>{scale?.display || scale.name}</option>)}
            </select>

            <button onClick={async () => {
                console.log("FETCHED!", await getPiNumbers(7, 50));
            }}>FETCH!
            </button>

            <h1>Notes: {notes.join(", ")}</h1>

            {ScalesData.map((scale) =>
                <h1 key={scale.name}>
                    ({getScaleNotes(key, scale.name).length})
                    {scale?.display || scale.name}:
                    {getScaleNotes(key, scale.name).join(", ")}
                </h1>
            )}
        </>
    );
}

export default App
