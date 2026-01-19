import { useState, useEffect } from "react";
import NumberSpinner from "./NumberSpinner.jsx";

function CustomResultLengthPicker({setValue}) {
    const [orderHundred, setOrderHundred] = useState(0);
    const [orderTen, setOrderTen] = useState(0);
    const [orderOne, setOrderOne] = useState(1);

    useEffect(() => {
        setValue(Number(`${orderHundred}${orderTen}${orderOne}`));
    }, [orderOne, orderTen, orderHundred]);

    return (
        <div style={{display: "flex"}}>
            <NumberSpinner
                value={orderHundred}
                setValue={setOrderHundred}
                min={0}
                max={9}
            />
            <NumberSpinner
                value={orderTen}
                setValue={setOrderTen}
                min={0}
                max={9}
            />
            <NumberSpinner
                value={orderOne}
                setValue={setOrderOne}
                min={1}
                max={9}
            />
        </div>
    );
}

export default CustomResultLengthPicker;
