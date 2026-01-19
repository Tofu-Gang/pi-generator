function Content({title, children}) {
    return (
        <fieldset>
            <legend>{title}</legend>
            {children}
        </fieldset>
    );
}

export default Content;
