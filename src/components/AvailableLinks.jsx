import { useMusic } from "../context/music.jsx";
import { Link, useLocation } from "react-router";
import Content from "./Content.jsx";

function AvailableLinks() {
    const {links} = useMusic();
    const location = useLocation();

    return (
        <Content title="Available actions:" children={
            <div className="flex flex-col">
                {links
                    .filter((link) => link.state.available() && link.path !== location.pathname)
                    .map((link) => <Link
                        className={`${link.state.done() ? "text-green-600" : "text-yellow-600 animate-pulse"}`}
                        key={link.path}
                        to={link.path}
                    >
                        {link.display}
                    </Link>)
                }
            </div>
        }/>
    );
}

export default AvailableLinks;
