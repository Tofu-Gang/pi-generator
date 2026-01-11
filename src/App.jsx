import getPiNumbers from "./lib/fetchPI.js";

function App() {
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
