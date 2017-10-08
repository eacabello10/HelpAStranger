import React, {Component} from "react";
import PropTypes from "prop-types";

import Message from "./Message.jsx"
import "./Chat.css";

class Chat extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div  className="chat col-sm-5">
            <div className="row">
                <div id="menu">
                    <p className="welcome">Welcome, <b></b></p>
                </div>
        
                <div id="chatbox">
                {this.props.messages.map((message, i) => {
                    return <Message message={message} key={i}/>
                })}
                </div>
        
                <div className="message">
                    <input className="usermsg form-control" type="text" id="usermsg" size="63" />
                    <button className="submitmsg btn">Send</button>
                </div>
            </div>
        </div>
        )
    }
}

Chat.propTypes = {
    messages: PropTypes.array.isRequired
};

export default Chat;
