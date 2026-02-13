import { useMusic } from "../context/music.jsx";
import { useLocation } from "react-router";
import Content from "./Content.jsx";
import Button from "./Button.jsx";

function AvailableLinks() {
    const {links, resetAll} = useMusic();
    const location = useLocation();

    return (
        <Content title="Available actions:" children={
            <div className="flex flex-col">
                {links
                    .filter((link) => link.state.available() && link.path !== location.pathname)
                    .map((link) =>
                        <Button
                            key={link.path}
                            available={link.state.available()}
                            done={link.state.done()}
                            isCurrentPage={false}
                            link={link.path}
                            display={link.display}
                        />
                    )
                }
                {<Button available={true} link={"/"} display="Reset" isReset={true} onClick={resetAll} />}
            </div>
        }/>
    );
}

export default AvailableLinks;
