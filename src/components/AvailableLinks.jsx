import { useMusic } from "../context/music.jsx";
import { Link, useLocation } from "react-router";
import Content from "./Content.jsx";

function AvailableLinks() {
    const {links} = useMusic();
    const location = useLocation();

    return (
        <Content title="Next" children={
            <div className="flex flex-col">
                {links
                    .filter((link) => link.state.available() && link.path !== location.pathname)
                    .map((link) => <Link key={link.path} to={link.path}>{link.display}</Link>)
                }
            </div>
        }/>
    );
}

export default AvailableLinks;
