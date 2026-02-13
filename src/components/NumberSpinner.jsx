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
        <div className="flex flex-col text-xl items-center">
            <button className="p-2 cursor-pointer text-3xl" onClick={increment}>↑</button>
            <p className="p-2 text-3xl">{value}</p>
            <button className="p-2 cursor-pointer text-3xl" onClick={decrement}>↓</button>
        </div>
    );
}

export default NumberSpinner;
