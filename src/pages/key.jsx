import { useMusic } from "../context/music.jsx";
import { Keys } from "../lib/musicData.js"
import { Link } from "react-router";
import Content from "../components/Content.jsx";
import { PiGeneratorRoutes } from "../App.jsx";

function Key() {
    const {key, setKey} = useMusic();

    return (
        <div className="h-full">
            <Content title={"Choose a key:"} children={Keys.map((key) => <button key={key} onClick={() => setKey(key)}>{key}</button>)} />

            {key &&
                <>
                    <Content title={"Key"} children={<h1>{key}</h1>} />
                    <Content title={"Next"} children={<Link to={PiGeneratorRoutes.Filters.path}>Filter Scales</Link>}/>
                </>
            }
        </div>
    );
}

export default Key;
