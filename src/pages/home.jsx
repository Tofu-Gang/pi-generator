import { useEffect } from "react";
import { useMusic, Defaults } from "../context/music.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";

function Home() {
    const {setKey, setFilters, setScales, setScale, setNotes, setResultLength, setResultNotes} = useMusic();

    useEffect(() => {
        setKey((current) => ({
            ...current,
            value: Defaults.key
        }));
        setFilters((current) => ({
            ...current,
            value: Defaults.filters
        }));
        setScales((current) => ({
            ...current,
            value: Defaults.scales
        }));
        setScale((current) => ({
            ...current,
            value: Defaults.scale
        }));
        setNotes((current) => ({
            ...current,
            value: Defaults.notes
        }));
        setResultLength((current) => ({
            ...current,
            value: Defaults.resultLength

        }));
        setResultNotes((current) => ({
            ...current,
            value: Defaults.resultNotes
        }));
    }, []);

    return (
        <div className="flex-col h-full">
            <h1 className="p-3 text-4xl">Welcome to Pi Generator! No LLM, just good old algorithm!</h1>
            <h1 className="p-3 text-xl">For all the music and math geeks, you can generate music<sup>*</sup> from the number Pi! 3.14152...</h1>
            <h1 className="p-3 text-xl"><sup>*</sup>Well, notes only in text. You'll have to play it yourself on your instrument!</h1>
            <h1 className="p-3 text-xl">You will need to set couple of things: a key, a scale and how many notes you want to generate.</h1>
            <h1 className="p-3 text-xl">Since this generator supports many scales, you'll need to first filter out what scales you want: Major, minor, pentatonic...</h1>
            <h1 className="p-3 text-xl">Still, there are only five steps to get your generated result.</h1>
            <h1 className="p-3 text-xl">Available actions <span className="text-yellow-600 animate-pulse">glow in gold</span>.</h1>
            <h1 className="p-3 text-xl">What is not available yet is <span className="text-gray-600">greyed out</span>.</h1>
            <h1 className="p-3 text-xl">What is already set is <span className="text-green-600">green</span>.</h1>
            <h1 className="p-3 text-3xl">Go for it!</h1>
            <AvailableLinks />
        </div>
    );
}

export default Home;
