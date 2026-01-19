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
        <div className="flex">
            <NumberSpinner
                value={orderHundred}
                setValue={setOrderHundred}
                min={(orderOne > 0 || orderTen > 0) ? 0 : 1}
                max={9}
            />
            <NumberSpinner
                value={orderTen}
                setValue={setOrderTen}
                min={(orderOne > 0 || orderHundred > 0) ? 0 : 1}
                max={9}
            />
            <NumberSpinner
                value={orderOne}
                setValue={setOrderOne}
                min={(orderTen > 0 || orderHundred > 0) ? 0 : 1}
                max={9}
            />
        </div>
    );
}

export default CustomResultLengthPicker;
