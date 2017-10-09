import React, {Component} from "react";
import PropTypes from "prop-types";

import Message from "./Message.jsx"
import "./Chat.css";

class Chat extends Component {
    constructor(props){
        super(props);
    }

    sendMessage(){
        this.props.newMessage(this.input.value);
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
                    <input className="usermsg form-control" type="text" ref={(in) => this.input = in} id="usermsg" size="63" />
                    <button className="submitmsg btn" onClick={this.sendMessage.bind(this)}>Send</button>
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
