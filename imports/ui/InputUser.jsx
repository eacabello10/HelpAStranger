import React, { Component } from 'react';
import PropTypes from "prop-types";

class InputUser extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
    	this.props.onClick(this.input.value);
    }

    render() {
        return (
            <div className="InputUser">
            <input type="text" placeholder="Enter a nickname"
            ref = {(input) => this.input = input}/>
            <button onClick={this.onClick}>Ingresar</button>
            </div>
        );
    }
}

InputUser.propTypes = {
	onClick : PropTypes.func.isRequired
};

export default InputUser;
