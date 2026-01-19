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
        <div className="flex flex-col">
            <button onClick={increment}>⋀</button>
            <h1>{value}</h1>
            <button onClick={decrement}>⋁</button>
        </div>
    );
}

export default NumberSpinner;
