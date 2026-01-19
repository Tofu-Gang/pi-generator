import { useMusic } from "../context/music.jsx";
import Checkbox from "../components/Checkbox.jsx";
import { Link } from "react-router";
import Content from "../components/Content.jsx";

function Filters() {
    const {filters, setFilters} = useMusic();

    function onChange(checkboxIndex) {
        setFilters((current) =>
            current.map((filter, index) =>
                index === checkboxIndex ? {...filter, checked: !filter.checked} : {...filter}
            )
        );
    }

    return (
        <>
            <Content title={"Filter scales:"} children={
                <div>
                    {filters.map((filter, index) =>
                        <Checkbox
                            key={filter.name}
                            name={filter.name}
                            checked={filter.checked}
                            onChange={() => onChange(index)}
                        />
                    )}
                </div>
            } />

            {filters.filter((filter) => filter.checked).length > 0 &&
                <Content title={"Next"} children={<Link to="/scale">Choose Scale</Link>} />
            }
        </>
    );
}

export default Filters;
