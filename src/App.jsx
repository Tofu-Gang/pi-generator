import { Scale } from "tonal";
import getPiNumbers from "./lib/fetchPI.js";

function App() {
    const key = "C";
    const scale = "major";
    console.log("PRDEL!!", Scale.scaleNotes(Scale.get(`${key} ${scale}`).notes));

    return (
        <>
            <h1>My App</h1>
            <button onClick={async () => {
                console.log("FETCHED!", await getPiNumbers(999990, 7));
            }}>FETCH!</button>
        </>
    );
}

export default App
