import { Link } from "react-router";
import { useMusic } from "../context/music.jsx";

function Header() {
    const { key, filters, scale, notes, resultLength, resultNotes } = useMusic();
    const breadcrumbs = [];

    if(key) {
        breadcrumbs.push(`Key: ${key}`);
    }
    if(filters.some((filter) => filter.checked)) {
        breadcrumbs.push(`Filters: ${filters.filter((filter) => filter.checked).map((filter) => filter.name).join(", ")}`);
    }
    if(scale) {
        breadcrumbs.push(`Scale: ${scale.name}`);
    }
    if(notes.length > 0) {
        breadcrumbs.push(`Notes: ${notes.join(", ")}`);
    }
    if(resultLength) {
        breadcrumbs.push(`${resultLength.name}: ${resultLength.length}`);
    }
    if(resultNotes.length > 0) {
        breadcrumbs.push(`Result: ${resultNotes}`);
    }

    return (
        <div style={{display: "flex", border: "4px solid red"}}>
            <h1>HEADER</h1>
            <h1><Link to="/">Home</Link></h1>
            {breadcrumbs.length > 0 && <p>{breadcrumbs.join("| ")}</p>}
        </div>
    );
}

export default Header;
