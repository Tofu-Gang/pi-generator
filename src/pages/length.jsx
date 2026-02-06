import { useMusic } from "../context/music.jsx";
import { ResultLengths } from "../lib/musicData.js";
import CustomResultLengthPicker from "../components/CustomResultLengthPicker.jsx";
import Content from "../components/Content.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";
import Checkbox from "../components/Checkbox.jsx";

function Length() {
    const {resultLength, setResultLength} = useMusic();

    return (
        <div className="h-full">
            <Content
                title={"Set result length:"}
                children={
                    ResultLengths.map((resultLengthData) =>
                        <Checkbox
                            className={"h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-green-600 checked:bg-green-600"}
                            key={resultLengthData.name}
                            name={resultLengthData.name}
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
            <AvailableLinks />
        </div>
    );
}

export default Length;
