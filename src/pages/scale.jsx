import { useMusic } from "../context/music.jsx";
import { Link } from "react-router";
import Content from "../components/Content.jsx";
import { PiGeneratorRoutes } from "../App.jsx";

function Scale() {
    const {scales, scale, setScale, notes} = useMusic();

    return (
        <div className="h-full">
            <Content title={"Choose a scale:"} children={
                scales.value.map((scaleData) =>
                    <button
                        key={scaleData.name}
                        onClick={() => setScale((current) => ({
                            ...current,
                            value: {...scaleData}
                        }))}
                    >
                        {scaleData.display}
                    </button>)
                }
            />

            {scale.done() &&
                <>
                    <Content title={"Notes:"} children={<h1>{notes.value.join(", ")}</h1>} />
                    <Content title={"Next"} children={<Link to={PiGeneratorRoutes.ResultLength.path}>Choose Length</Link>} />
                </>
            }
        </div>
    );
}

export default Scale;
