import { useMusic } from "../context/music.jsx";
import Checkbox from "../components/Checkbox.jsx";
import { Link } from "react-router";

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
            <fieldset>
                <legend>Filter scales:</legend>
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
            </fieldset>

            {filters.filter((filter) => filter.checked).length > 0 &&
                <fieldset>
                    <legend>Next</legend>
                    <Link to="/scale">Choose Scale</Link>
                </fieldset>
            }
        </>
    );
}

export default Filters;
