import { useMusic } from "../../context/music.jsx";
import { ResultLengths } from "../../lib/musicData.js";
import CustomResultLengthPicker from "../CustomResultLengthPicker.jsx";
import Content from "../Content.jsx";
import Checkbox from "../Checkbox.jsx";
import PageContent from "../PageContent.jsx";

function Length() {
    const {resultLength, setResultLength} = useMusic();

    return (
        <PageContent children={
            <>
                <Content
                    title={"Set result length:"}
                    children={
                        ResultLengths.map((resultLengthData) =>
                            <Checkbox
                                className={"h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-green-600 checked:bg-green-600"}
                                key={resultLengthData.name}
                                name={`${resultLengthData.name} (${resultLengthData.length} notes)`}
                                checked={resultLengthData.name === resultLength.value?.name}
                                onChange={() => setResultLength((current) => ({
                                    ...current,
                                    value: current.value?.name === resultLengthData.name ? null : {...resultLengthData}
                                }))}
                            />
                        )
                    }
                />

                {resultLength.value?.name === "Custom" &&
                    <Content title={"Set custom length:"} children={
                        <CustomResultLengthPicker
                            setValue={(length) => setResultLength((current) => ({
                                ...current,
                                value: {
                                    ...current.value,
                                    length
                                }
                            }))}
                        />
                    } />
                }
            </>
        } />
    );
}

export default Length;
