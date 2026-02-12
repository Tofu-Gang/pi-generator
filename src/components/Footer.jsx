import Info from "./Info.jsx";

function Footer() {
    return (
        <div className="fixed bottom-0 w-full flex border-4 border-green-600 bg-black overflow-auto no-scrollbar">
            <div className="grow"></div>
            <Info />
            <div className="grow"></div>
        </div>
    );
}

export default Footer;
