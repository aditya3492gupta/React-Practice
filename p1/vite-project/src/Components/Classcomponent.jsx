import React, { Component } from 'react'

class Classcomponent extends Component {
    render() {
        return (
            <div>
                <h1>class component</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
// code is not manageable
export default Classcomponent
