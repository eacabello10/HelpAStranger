import React, {Component} from "react";
import PropTypes from "prop-types";

import "./Message.css";

class Message extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="message col-sm-6">
            {this.props.message.author == this.props.currentUser.anon ? <h4 className="currentMess"><strong>{this.props.message.text}</strong></h4> 
            : <h4 className="mess">{this.props.message.text}</h4>}
            <h6>{this.props.message.author} on: {this.props.message.date}</h6>
        </div>
        )
    }
}

Message.propTypes = {
    
};

export default Message;
