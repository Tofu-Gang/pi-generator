import Breadcrumbs from "./Breadcrumbs.jsx";

function Header() {
    return (
        <div className="fixed top-0 w-full flex border-4 border-green-600 bg-black">
            <div className="grow"></div>
            <Breadcrumbs />
            <div className="grow"></div>
        </div>
    );
}

export default Header;
