import React, { Component } from "react";

class MagicText extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: ""
        }
    }

    handleChange(value) {
        this.setState( {userInput: value} )
    };

    render() {
        return (
            <div>
                <input onChange={ (e) => this.handleChange(e.target.value) }></input>
                <span>{this.state.userInput}</span>
            </div>
        )
    }
}

export default MagicText