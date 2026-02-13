import { useMusic } from "../context/music.jsx";
import { useLocation } from "react-router";
import Button from "./Button.jsx";

function Breadcrumbs() {
    const {links} = useMusic();
    const location = useLocation();

    return (
        <div className="flex flex-nowrap overflow-auto no-scrollbar">
            <Button done={true} link={"/"} display="Home" />
            {links.map((breadcrumb) =>
                <Button
                    key={breadcrumb.display}
                    available={breadcrumb.state.available()}
                    done={breadcrumb.state.done()}
                    isCurrentPage={breadcrumb.path === location.pathname}
                    link={breadcrumb.path}
                    display={breadcrumb.display}
                />
            )}
        </div>
    );
}

export default Breadcrumbs;
