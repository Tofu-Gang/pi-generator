import { useMusic } from "../context/music.jsx";
import Checkbox from "../components/Checkbox.jsx";
import { Link } from "react-router";
import Content from "../components/Content.jsx";
import { PiGeneratorRoutes } from "../App.jsx";

function Filters() {
    const {filters, setFilters} = useMusic();

    function onChange(checkboxIndex) {
        setFilters((current) => ({
            ...current,
            value: current.value.map((filter, index) =>
                index === checkboxIndex ? {...filter, checked: !filter.checked} : {...filter}
            )
        }));
    }

    return (
        <div className="h-full">
            <Content title={"Filter scales:"} children={
                <div>
                    {filters.value.map((filter, index) =>
                        <Checkbox
                            key={filter.name}
                            name={filter.name}
                            checked={filter.checked}
                            onChange={() => onChange(index)}
                        />
                    )}
                </div>
            } />

            {filters.done() &&
                <Content title={"Next"} children={<Link to={PiGeneratorRoutes.Scale.path}>Choose Scale</Link>} />
            }
        </div>
    );
}

export default Filters;
