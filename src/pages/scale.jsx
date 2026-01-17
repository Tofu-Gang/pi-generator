import { useMusic } from "../context/music.jsx";
import { Link } from "react-router";

function Scale() {
    const {scale, scales, setScale, notes} = useMusic();

    return (
        <>
            <fieldset>
                <legend>Choose a scale:</legend>
                {scales.map((scale) =>
                    <button
                        key={scale.name}
                        onClick={() => setScale(scales.filter((scaleData) =>
                            scaleData.name === scale.name)[0])}
                    >
                        {scale.display}
                    </button>)}
            </fieldset>

            {scale &&
                <>
                    <fieldset>
                        <legend>Notes:</legend>
                        <h1>{notes.join(", ")}</h1>
                    </fieldset>

                    <fieldset>
                        <legend>Next</legend>
                        <Link to="/length">Choose Length</Link>
                    </fieldset>
                </>
            }
        </>
    );
}

export default Scale;
