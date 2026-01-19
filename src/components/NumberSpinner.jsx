function NumberSpinner({value, setValue, min, max}) {
    function increment() {
        if(value < max) {
            setValue((current) => current + 1);
        } else {
            setValue(min);
        }
    }

    function decrement() {
        if(value > min) {
            setValue((current) => current - 1);
        } else {
            setValue(max);
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <button onClick={increment}>⋀</button>
            <h1>{value}</h1>
            <button onClick={decrement}>⋁</button>
        </div>
    );
}

export default NumberSpinner;
