import { useMusic } from "../context/music.jsx";
import { PiGeneratorRoutes } from "../App.jsx";
import { Link } from "react-router";

function Breadcrumbs() {
    const {links} = useMusic();

    return (
        <>
            <div className="flex flex-wrap">
                {links.map((breadcrumb) =>
                    <Link
                        className={`m-1 rounded-full
                    ${breadcrumb.state.done() ? "text-green-600" : breadcrumb.state.available() ? "text-yellow-600 animate-pulse" : "text-gray-600"} 
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
