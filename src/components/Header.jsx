import { Link, useLocation } from "react-router";
import { useMusic } from "../context/music.jsx";

function Header() {
    const { key, filters, scale, resultLength, resultNotes } = useMusic();
    const breadcrumbs = [
        {
            name: "Key",
            done: !!key
        },
        {
            name: "Filters",
            done: filters.some((filter) => filter.checked)
        },
        {
            name: "Scale",
            done: !!scale
        },
        {
            name: "Result Length",
            done: !!resultLength
        },
        {
            name: "Result Notes",
            done: resultNotes.length > 0
        }];
    const location = useLocation();

    return (
        <div style={{display: "flex", border: "4px solid red"}}>
            {location.pathname === "/" && <h3 style={{padding: "3px"}}>BREADCRUMBS:</h3>}
            {location.pathname !== "/" && <><h3 style={{padding: "3px"}}><Link to="/">Home</Link></h3><h3 style={{padding: "3px"}}>BREADCRUMBS:</h3></>}
            {breadcrumbs.length > 0 && breadcrumbs.map((breadcrumb) =>
                <h3
                    key={breadcrumb.name}
                    style={{
                        color: breadcrumb.done ? "green" : "gray",
                        border: `1px solid ${breadcrumb.done ? "green" : "gray"}`,
                        padding: "3px"
                    }}
                >
                    {breadcrumb.name}
                </h3>
            )}
        </div>
    );
}

export default Header;
