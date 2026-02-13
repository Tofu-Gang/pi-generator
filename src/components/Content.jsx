function Content({title, children}) {
    return (
        <fieldset className="p-3">
            <legend className="text-4xl">{title}</legend>
            <div className="p-3">{children}</div>
        </fieldset>
    );
}

export default Content;
