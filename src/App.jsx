import { useEffect } from "react";
import axios from "axios";
import { Scale } from "tonal";

function App() {
    useEffect(() => {
        async function fetchPi() {
            await axios.get("https://api.pi.delivery/v1/pi?start=999990&numberOfDigits=10")
                .then(function (response) {
                    // handle success
                    console.log("PRDEL!!!", response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

        fetchPi();
    }, []);
    console.log("PRDEL!", Scale.names());
    const key = "C";
    const scale = "major";
    console.log("PRDEL!!", Scale.scaleNotes(Scale.get(`${key} ${scale}`).notes));

    return (
        <>
            <h1>My App</h1>
        </>
    );
}

export default App
