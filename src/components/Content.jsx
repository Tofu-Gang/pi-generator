function Content({title, children}) {
    return (
        <fieldset>
            <legend className="text-xl">{title}</legend>
            {children}
        </fieldset>
    );
}

export default Content;
