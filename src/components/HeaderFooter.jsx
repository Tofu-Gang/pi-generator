import { useMusic } from "../context/music.jsx";
import { Link, useLocation } from "react-router";

function HeaderFooter({footer}) {
    const {key, filters, scale, notes, resultLength, resultNotes} = useMusic();
    const location = useLocation();

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

    const breadcrumbsDisplay = (
        <div className="flex flex-wrap">
            {breadcrumbs.map((breadcrumb) =>
                <h3
                    className={`
                    ${breadcrumb.done ? "text-green-600" : "text-gray-600"} 
                    border
                    ${breadcrumb.done ? "border-green-600" : "border-gray-600"}
                    p-3`}
                    key={breadcrumb.name}
                >
                    {breadcrumb.name}
                </h3>
            )}
        </div>
    );
    
    const selectedDataDisplay = (
        <>
            <div className="grow"></div>
            {key && <h3 className="p-3">Key: {key}</h3>}
            {filters.filter((filter) => filter.checked).length > 0 && <h3 className="p-3">Filters chosen</h3>}
            {key && scale && <h3 className="p-3">Scale: {key} {scale.display}</h3>}
            {notes.length > 0 && <h3 className="p-3">Notes: {notes.join(", ")}</h3>}
            {resultLength?.length && <h3 className="p-3">Result length: {resultLength.name}({resultLength.length} notes)</h3>}
            {resultNotes.length > 0 && <h3 className="p-3">GO PLAY!</h3>}
            <div className="grow"></div>
        </>
    );

    return (
        <div className={`flex justify-between border-4 ${footer ? "border-blue-950" : "border-red-600"}`}>
            {location.pathname !== "/" && !footer && <h3 className="p-3"><Link to="/">Home</Link></h3>}
            {location.pathname === "/" && <div></div>}
            {!footer && breadcrumbsDisplay}
            {!footer && <div></div>}
            {footer && selectedDataDisplay}
        </div>
    );
}

export default HeaderFooter;
