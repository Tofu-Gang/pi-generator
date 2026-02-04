import { useMusic } from "../context/music.jsx";
import Content from "../components/Content.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";

function Scale() {
    const {scales, setScale} = useMusic();

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
            <AvailableLinks />
        </div>
    );
}

export default Scale;
