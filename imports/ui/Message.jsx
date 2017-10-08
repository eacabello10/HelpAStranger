import React, {Component} from "react";
import PropTypes from "prop-types";

import "./Chat.css";

class Message extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="message col-sm-4">
            <textfield>{this.props.message.text}</textfield>
            <h6>{this.props.message.date}</h6>
        </div>
        )
    }
}

Message.propTypes = {
    
};

export default Message;
