import { Link } from "react-router";

function Header() {
    return (
        <div style={{display: "flex", border: "4px solid red"}}>
            <h1>HEADER</h1>
            <h1><Link to="/">Home</Link></h1>
        </div>
    );
}

export default Header;
