import { useMusic } from "../context/music.jsx";
import { PiGeneratorRoutes } from "../App.jsx";
import { Link } from "react-router";

function Breadcrumbs() {
    const {key, filters, scale, resultLength, resultNotes} = useMusic();

    const KeyBreadcrumb = {
        name: "Key",
        done: !!key,
        available: true,
        path: PiGeneratorRoutes.Key.path
    };

    const FiltersBreadcrumb = {
        name: "Filters",
        done: filters.some((filter) => filter.checked),
        available: true,
        path: PiGeneratorRoutes.Filters.path
    };

    const ScaleBreadcrumb = {
        name: "Scale",
        done: !!scale,
        available: KeyBreadcrumb.done && FiltersBreadcrumb.done,
        path: PiGeneratorRoutes.Scale.path
    }

    const ResultLengthBreadcrumb = {
        name: "Result Length",
        done: !!resultLength,
        available: true,
        path: PiGeneratorRoutes.ResultLength.path
    };

    const ResultBreadcrumb = {
        name: "Result Notes",
        done: resultNotes.length > 0,
        available: KeyBreadcrumb.done && ScaleBreadcrumb.done && ResultLengthBreadcrumb.done,
        path: PiGeneratorRoutes.Result.path
    }

    const Breadcrumbs = [
        KeyBreadcrumb,
        FiltersBreadcrumb,
        ScaleBreadcrumb,
        ResultLengthBreadcrumb,
        ResultBreadcrumb
    ];

    return (
        <>
            <div className="flex flex-wrap">
                {Breadcrumbs.map((breadcrumb) =>
                    <Link
                        className={`
                    ${breadcrumb.done ? "text-green-600" : breadcrumb.available ? "text-yellow-600" : "text-gray-600"} 
                    border
                    ${breadcrumb.done ? "border-green-600" : breadcrumb.available ? "border-yellow-600" : "border-gray-600"}
                    p-3 ${!breadcrumb.done && !breadcrumb.available && "pointer-events-none"}`}
                        key={breadcrumb.name}
                        to={breadcrumb.path}
                    >
                        {breadcrumb.name}
                    </Link>
                )}
            </div>
        </>
    );
}

export default Breadcrumbs;
