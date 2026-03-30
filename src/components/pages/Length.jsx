import { useMusic } from "../../context/music.jsx";
import { ResultLengths } from "../../lib/musicData.js";
import CustomResultLengthPicker from "../CustomResultLengthPicker.jsx";
import Content from "../Content.jsx";
import Checkbox from "../Checkbox.jsx";

function Length() {
    const {resultLength, setResultLength} = useMusic();

    return (
        <>
            <Content
                title={"Result Length"}
                children={
                    ResultLengths.map((resultLengthData) =>
                        <Checkbox
                            className={"h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-green-600 checked:bg-green-600"}
                            key={resultLengthData.name}
                            name={`${resultLengthData.name} (${resultLengthData.length} notes)`}
                            checked={resultLengthData.name === resultLength?.name}
                            onChange={() => setResultLength((current) => (
                                current?.name === resultLengthData.name ? null : {...resultLengthData}
                            ))}
                        />
                    )
                }
            />

            {resultLength?.name === "Custom" &&
                <Content title={"Set custom length:"} children={
                    <CustomResultLengthPicker
                        setValue={(length) => setResultLength(length)}
                    />
                } />
            }
        </>
    );
}

export default Length;
