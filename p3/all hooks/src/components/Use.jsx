import React, { useState } from 'react'
const Use = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    };
    const [inputvalue, setinputvalue] = useState("bye");
    const change = (event) => {
        const newval = event.target.value;
        setinputvalue(newval);
    };
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button><br />
            {/* set the written as the text in box*/}
            <input type="text" placeholder='hi' onChange={change} />
            {inputvalue}
        </div>
    )
}

export default Use
