import { useMusic } from "../context/music.jsx";
import { Link } from "react-router";
import Content from "../components/Content.jsx";
import { PiGeneratorRoutes } from "../App.jsx";

function Scale() {
    const {scale, scales, setScale, notes} = useMusic();

    return (
        <div className="h-full">
            <Content title={"Choose a scale:"} children={
                scales.map((scale) =>
                    <button
                        key={scale.name}
                        onClick={() => setScale(scales.filter((scaleData) => scaleData.name === scale.name)[0])}
                    >
                        {scale.display}
                    </button>)
                }
            />

            {scale &&
                <>
                    <Content title={"Notes:"} children={<h1>{notes.join(", ")}</h1>} />
                    <Content title={"Next"} children={<Link to={PiGeneratorRoutes.ResultLength.path}>Choose Length</Link>} />
                </>
            }
        </div>
    );
}

export default Scale;
