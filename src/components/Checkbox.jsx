function Checkbox({name, checked, onChange}) {
    return (
        <>
            <input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}/>
            <label htmlFor={name}>{name}</label>
        </>
    );
}

export default Checkbox;
