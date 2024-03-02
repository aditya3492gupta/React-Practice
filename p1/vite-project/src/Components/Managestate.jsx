import React, { Component } from 'react'

class Managestate extends Component {
    constructor() {
        super();
        this.state = {
            name: "ironman",
            age: "40",
            power: "4520"
        };
    }
    // no semicolon to use if another function is used
    changedata = () => {
        this.setState({
            name: "hulk",
            age: "54",
            power: "5454545"
        });
    };
    render() {
        return (
            <div>
                <h1>managing state in class component</h1>
                <h2>Name:{this.state.name}</h2>
                <h2>Age:{this.state.age}</h2>
                <h2>Power:{this.state.power}</h2>
                <button onClick={this.changedata}>Change data</button>
            </div>
        )
    }
}

export default Managestate
