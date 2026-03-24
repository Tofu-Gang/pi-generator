import { useMusic } from "../../context/music.jsx";
import Content from "../Content.jsx";
import Checkbox from "../Checkbox.jsx";
import PageContent from "../PageContent.jsx";

function Scale() {
    const {scales, setScale, scale} = useMusic();

    return (
        <PageContent children={
            <Content title={"Set scale:"} children={
                <div className="flex flex-col">
                    {scales.value.map((scaleData) =>
                        <Checkbox
                            className={"h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-green-600 checked:bg-green-600"}
                            key={scaleData.name}
                            name={scaleData.display}
                            checked={scale.value?.name === scaleData.name}
                            onChange={() => setScale((current) => ({
                                ...current,
                                value: current.value?.name === scaleData.name ? null : {...scaleData}
                            }))}
                        />
                    )}
                </div>}
            />
        } />
    );
}

export default Scale;
