function Content({title, children}) {
    return (
        <fieldset className="p-3 my-16">
            <div>
                <legend className="text-4xl">{title}</legend>
                <div className="p-3">{children}</div>
            </div>
        </fieldset>
    );
}

export default Content;
