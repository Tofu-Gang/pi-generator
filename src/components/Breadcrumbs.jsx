import { useMusic } from "../context/music.jsx";
import { PiGeneratorRoutes } from "../App.jsx";
import { Link } from "react-router";

function Breadcrumbs() {
    const {key, filters, scale, resultLength, resultNotes} = useMusic();

    const Breadcrumbs = [
        {
            display: "Key",
            state: key,
            path: PiGeneratorRoutes.Key.path
        },
        {
            display: "Filters",
            state: filters,
            path: PiGeneratorRoutes.Filters.path
        },
        {
            display: "Scale",
            state: scale,
            path: PiGeneratorRoutes.Scale.path
        },
        {
            display: "Result Length",
            state: resultLength,
            path: PiGeneratorRoutes.ResultLength.path
        },
        {
            display: "Result Notes",
            state: resultNotes,
            path: PiGeneratorRoutes.ResultNotes.path
        }
    ];

    return (
        <>
            <div className="flex flex-wrap">
                {Breadcrumbs.map((breadcrumb) =>
                    <Link
                        className={`
                    ${breadcrumb.state.done() ? "text-green-600" : breadcrumb.state.available() ? "text-yellow-600" : "text-gray-600"} 
                    border
                    ${breadcrumb.state.done() ? "border-green-600" : breadcrumb.state.available() ? "border-yellow-600" : "border-gray-600"}
                    p-3 ${!breadcrumb.state.done() && !breadcrumb.state.available() && "pointer-events-none"}`}
                        key={breadcrumb.display}
                        to={breadcrumb.path}
                    >
                        {breadcrumb.display}
                    </Link>
                )}
            </div>
        </>
    );
}

export default Breadcrumbs;
