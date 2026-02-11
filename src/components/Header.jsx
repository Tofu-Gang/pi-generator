import { Link, useLocation } from "react-router";
import { PiGeneratorRoutes } from "../App.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

function Header() {
    const location = useLocation();

    return (
        <div className="fixed top-0 w-full flex justify-between border-4 border-green-600 bg-black">
            {location.pathname !== PiGeneratorRoutes.Home.path && <Link className="p-3 m-1 rounded-full bg-red-600 text-black" to="/">Reset</Link>}
            {location.pathname === PiGeneratorRoutes.Home.path && <div></div>}
            <Breadcrumbs />
            <div></div>
        </div>
    );
}

export default Header;
