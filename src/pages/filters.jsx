import { useMusic } from "../context/music.jsx";
import Checkbox from "../components/Checkbox.jsx";
import Content from "../components/Content.jsx";
import AvailableLinks from "../components/AvailableLinks.jsx";

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
            <AvailableLinks />
        </div>
    );
}

export default Filters;
