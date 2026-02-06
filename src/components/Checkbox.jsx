function Checkbox({className, name, checked, onChange}) {
    return (
        <div className="flex items-center">
            <input
                className={`m-1 ${className}`}
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}/>
            <label className="m-1" htmlFor={name}>{name}</label>
        </div>
    );
}

export default Checkbox;
