import React, { useRef } from 'react'

function Ref() {
    const inputRef = useRef(null);
    const onclick = () => {
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    };
    return (
        <div>
            <h1>hi</h1>
            <input type="text" placeholder='write something' ref={inputRef} />
            <button onClick={onclick}>submit</button>
        </div>
    )
}

export default Ref
