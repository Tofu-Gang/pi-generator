import { useMusic } from "../context/music.jsx";
import { Link, useLocation } from "react-router";

function Breadcrumbs() {
    const {links} = useMusic();
    const location = useLocation();

    return (
        <>
            <div className="flex flex-wrap">
                {links.map((breadcrumb) =>
                    <Link
                        className={`m-1 p-3 rounded-full
                        ${breadcrumb.state.done() ? 
                            breadcrumb.path === location.pathname ? 
                                "text-black bg-green-600" : 
                                "text-green-600" : 
                            breadcrumb.state.available() ? 
                                breadcrumb.path === location.pathname ? 
                                    "text-black bg-yellow-600" : 
                                    "text-yellow-600 animate-pulse" : 
                                "text-gray-600"}
                        border
                        ${breadcrumb.state.done() ? 
                            "border-green-600" : 
                            breadcrumb.state.available() ? 
                                "border-yellow-600" : 
                                "border-gray-600"}
                        ${!breadcrumb.state.done() && !breadcrumb.state.available() && "pointer-events-none"}`}
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
