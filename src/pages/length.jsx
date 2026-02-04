import { useMusic } from "../context/music.jsx";
import { ResultLengths } from "../lib/musicData.js";
import CustomResultLengthPicker from "../components/CustomResultLengthPicker.jsx";
import Content from "../components/Content.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";

function Length() {
    const {resultLength, setResultLength} = useMusic();

    return (
        <div className="h-full">
            <Content
                title={"Choose length:"}
                children={
                    ResultLengths.map((resultLength) =>
                        <button
                            key={resultLength.name}
                            onClick={() => setResultLength((current) => ({
                                ...current,
                                value: ResultLengths.filter((resultLengthData) =>
                                    resultLengthData.name === resultLength.name)[0]
                            }))}
                        >
                            {resultLength.name}
                        </button>
                    )
                }
            />

            {resultLength.done() &&
                <>
                    <Content title={"The Length:"} children={
                        <>
                            {<h1>{`${resultLength.value.name}${resultLength.value?.length ? `: ${resultLength.value.length}` : ""}`}</h1>}
                            {resultLength.value.name === "Custom" &&
                                <CustomResultLengthPicker
                                    setValue={(length) => setResultLength((current) => ({
                                        ...current,
                                        value: {
                                            ...current.value,
                                            length
                                        }
                                    }))}
                                />
                            }
                        </>
                    }/>
                    <AvailableLinks />
                </>
            }
        </div>
    );
}

export default Length;
