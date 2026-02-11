import Breadcrumbs from "./Breadcrumbs.jsx";

function Header() {
    return (
        <div className="fixed top-0 w-full flex justify-between border-4 border-green-600 bg-black">
            <div></div>
            <Breadcrumbs />
            <div></div>
        </div>
    );
}

export default Header;
