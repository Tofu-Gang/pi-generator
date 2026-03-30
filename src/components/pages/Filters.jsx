import { useMusic } from "../../context/music.jsx";
import Checkbox from "../Checkbox.jsx";
import Content from "../Content.jsx";

function Filters() {
    const {filters, setFilters} = useMusic();

    function onChange(checkboxIndex) {
        setFilters((current) => (
            current.map((filter, index) =>
                index === checkboxIndex ? {...filter, checked: !filter.checked} : {...filter}
            )
        ));
    }

    return (
        <Content title={"Scales Filters"} children={
            <div className="flex flex-col">
                {filters.map((filter, index) =>
                    <Checkbox
                        className={"h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-green-600 checked:bg-green-600"}
                        key={filter.name}
                        name={filter.name}
                        checked={filter.checked}
                        onChange={() => onChange(index)}
                    />
                )}
            </div>
        } />
    );
}

export default Filters;
