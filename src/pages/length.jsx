import { useMusic } from "../context/music.jsx";
import { ResultLengths } from "../lib/musicData.js";
import { Link } from "react-router";
import CustomResultLengthPicker from "../components/CustomResultLengthPicker.jsx";
import Content from "../components/Content.jsx";
import { PiGeneratorRoutes } from "../App.jsx";

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
                            onClick={() => setResultLength(ResultLengths.filter((resultLengthData) =>
                                resultLengthData.name === resultLength.name)[0])}
                        >
                            {resultLength.name}
                        </button>
                    )
                }
            />

            {resultLength &&
                <>
                    <Content title={"The Length:"} children={
                        <>
                            {resultLength?.length &&
                                <h1>{`${resultLength.name}${resultLength?.length ? `: ${resultLength.length}` : ""}`}</h1>
                            }
                            {resultLength.name === "Custom" &&
                                <CustomResultLengthPicker
                                    setValue={(value) =>
                                        setResultLength((current) => ({...current, length: value}))}
                                />
                            }
                        </>
                    }/>

                    {resultLength?.length &&
                        <Content title={"Next"} children={<Link to={PiGeneratorRoutes.Result.path}>Get Result</Link>} />
                    }
                </>
            }
        </div>
    );
}

export default Length;
