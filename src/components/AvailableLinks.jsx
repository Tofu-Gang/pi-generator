import { useMusic } from "../context/music.jsx";
import { Link, useLocation } from "react-router";
import Content from "./Content.jsx";

function AvailableLinks() {
    const {links} = useMusic();
    const location = useLocation();

    return (
        <div className="p-3">
        <Content title="Available actions:" children={
            <div className="p-3 flex flex-col">
                {links
                    .filter((link) => link.state.available() && link.path !== location.pathname)
                    .map((link) => <Link className="text-yellow-600 animate-pulse" key={link.path} to={link.path}>{link.display}</Link>)
                }
            </div>
        }/>
        </div>
    );
}

export default AvailableLinks;
