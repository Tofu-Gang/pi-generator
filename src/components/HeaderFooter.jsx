import { Link, useLocation } from "react-router";
import { useMusic } from "../context/music.jsx";

function HeaderFooter({footer}) {
    const { key, filters, scale, resultLength, resultNotes } = useMusic();
    const breadcrumbs = [
        {
            name: "Key",
            done: !!key
        },
        {
            name: "Filters",
            done: filters.some((filter) => filter.checked)
        },
        {
            name: "Scale",
            done: !!scale
        },
        {
            name: "Result Length",
            done: !!resultLength
        },
        {
            name: "Result Notes",
            done: resultNotes.length > 0
        }];
    const location = useLocation();

    return (
        <div className={`flex border-4 ${footer ? "border-blue-950" : "border-red-600"}`}>
            {location.pathname === "/" && <h3 className="p-3">BREADCRUMBS:</h3>}
            {location.pathname !== "/" && <><h3 className="p-3"><Link to="/">Home</Link></h3><h3 className="p-3">BREADCRUMBS:</h3></>}
            <div className="flex flex-wrap">{breadcrumbs.length > 0 && breadcrumbs.map((breadcrumb) =>
                <h3 className={`
                ${breadcrumb.done ? "text-green-600" : "text-gray-600"} 
                border 
                ${breadcrumb.done ? "border-green-600" : "border-gray-600"} 
                p-3`}
                    key={breadcrumb.name}
                >
                    {breadcrumb.name}
                </h3>
            )}</div>
        </div>
    );
}

export default HeaderFooter;
