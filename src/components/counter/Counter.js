import { useState } from "react";
import './Counter.css';


const Counter = () => {
    // Initial value of state
    const [counter, setCounter] = useState(0);

    // function which will increment the value by calling state
    const inc = () => {
            setCounter(counter + 1);
    }

    // function which will decrement the value by calling state
    const dec = () => {
        setCounter(counter - 1);
    }

    // Checking if the value of counter is zro so that the User won't be able to go to minus 1
    if(counter > 0){
        return (
        <>
            <p className="InitialView__counter">{counter}</p>
            <div className="afterZero">
                <button className="afterZero__button" onClick={inc}>+</button>
                <button className="afterZero__button" onClick={dec}>-</button>
            </div>

        </>
    )
    } else {
        return (
            <>
                <h1>Your counter value is Zero, you can only increment it</h1>
                <div className="InitialView">
                    <p className="InitialView__counter">{counter}</p>
                    <button className="InitialView__button" onClick={inc}>+</button>
                </div>

            </>
        )
    }

    
}
export default Counter;