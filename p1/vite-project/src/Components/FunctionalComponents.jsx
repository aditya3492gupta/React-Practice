import React from 'react'

const FunctionalComponents = ({ name }) => {
    // const FunctionalComponents = (props) => {
    return (
        <div>
            <h1>functional component</h1>
            {/* <h1>{props.name}</h1> */}
            <h1>{name}</h1>
        </div>
    )
}
// code is manageable
// props are responsible to send data from one component to another component
export default FunctionalComponents
