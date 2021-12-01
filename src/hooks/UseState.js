import React, { useState } from 'react';
import '../app.css';

const UseState = () => {

    const [count, setCount] = useState(0);

    //made it asynchronous using a callback with prev as a prop inside the setCount function

    const handleAdd = () => {
        setCount((prev) => prev + 1);

        //if you run it with this line too you will get the initial plus two this because updates are now asynchronous.
        // setCount((prev) => prev + 1);
    }

    const handleSub = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <div className="state-container">
            <div className="title">
                <h1>useState Hook</h1>
            </div>
            
            <div className="buttons">
                <button onClick={handleSub}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
        </div>
    )
}

export default UseState;
