import { Link, useLocation } from "react-router";
import { PiGeneratorRoutes } from "../App.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";
import Info from "./Info.jsx";

function HeaderFooter({footer}) {
    const location = useLocation();

    return (
        <div className={`fixed ${footer ? "bottom-0" : "top-0"} w-full flex justify-between border-4 border-green-600 bg-black`}>
            {location.pathname !== PiGeneratorRoutes.Home.path && !footer && <Link className="p-3 m-1 rounded-full bg-red-600 text-black" to="/">Reset</Link>}
            {location.pathname === PiGeneratorRoutes.Home.path && <div></div>}
            {!footer && <Breadcrumbs />}
            {!footer && <div></div>}
            {footer && <Info />}
        </div>
    );
}

export default HeaderFooter;
