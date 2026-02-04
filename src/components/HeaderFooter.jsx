import { Link, useLocation } from "react-router";
import { PiGeneratorRoutes } from "../App.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";
import Info from "./Info.jsx";

function HeaderFooter({footer}) {
    const location = useLocation();

    return (
        <div className="flex justify-between border-4 border-green-600">
            {location.pathname !== PiGeneratorRoutes.Home.path && !footer && <h3 className="p-3"><Link to="/">Home</Link></h3>}
            {location.pathname === PiGeneratorRoutes.Home.path && <div></div>}
            {!footer && <Breadcrumbs />}
            {!footer && <div></div>}
            {footer && <Info />}
        </div>
    );
}

export default HeaderFooter;
