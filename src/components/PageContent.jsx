import AvailableLinks from "./AvailableLinks.jsx";

function PageContent({children}) {
    return (
        <div className="mt-18 mb-16 flex-col">
            {children}
            <AvailableLinks />
        </div>
    );
}

export default PageContent;
