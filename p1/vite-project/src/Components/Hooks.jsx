import React, { useState } from 'react'

function Hooks() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>managing state with hooks</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(1000)}>Add</button>
        </div>
    )
}

export default Hooks
