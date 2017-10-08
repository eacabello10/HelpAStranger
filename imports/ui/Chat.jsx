import React, { Component } from 'react';
import PropTypes from "prop-types";

class Chat extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	this.redraw(this.props);
    }
    componentWillUpdate(newProps) {
    	this.redraw(newProps);
    }

    redraw(newProps) {
    	let ctx = this.canvas.getContext("2d");

    	ctx.clearRect(0,0, newProps.width, newProps.height);

    	newProps.users.forEach((u) => {
    		ctx.beginPath();
    		ctx.moveTo(u.x, u.y);
    		ctx.arc(u.x, u.y, 3, 0, Math.PI*2);
    		ctx.fill();
    		ctx.fillText(u.name, u.x, u.y+20);
    	});
    }

    render() {
        return (
        <div className="Chat">
          <canvas width={this.props.width}
          height={this.props.height}
          ref={(c) => this.canvas = c}></canvas>
        </div>
        );
    }
}

Chat.propTypes = {
	width : PropTypes.number.isRequired,
	height : PropTypes.number.isRequired,
	users : PropTypes.array.isRequired
};

export default Chat;
