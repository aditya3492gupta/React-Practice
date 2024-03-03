import React, { useReducer, useState } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showtext: state.showtext }
        case "toggleshowtext":
            return { count: state.count, showtext: !state.showtext }
        default:
            return state
    }
};
const Reducer = () => {
    // using useStateconst
    // const [count, setCount] = useState(0);
    // const [showtext, setText] = useState(true);
    // using useReducer
    const [state, dispatch] = useReducer(reducer, { count: 0, showtext: true })
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "toggleshowtext" });
            }}>Increment</button>
            {state.showtext && <p>text</p>}
        </div>
    )
}

export default Reducer
