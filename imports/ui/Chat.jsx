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

    componentDidMount() {
        this.scrollToBottom();
  }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    componentWillUpdate(nuevos){

    }

    scrollToBottom() {
    this.chbox.scrollTop = this.chbox.scrollHeight - this.chbox.clientHeight;
  }

    render(){
        return (
        <div  className="chat col-sm-5">
            <div className="row">
                <div id="menu">
                    <p className="welcome">{this.props.chat.keyword[0]} </p>
                    
                </div>
        
                <div id="chatbox" ref={(chbox) => this.chbox = chbox}>
                {this.props.chat.messages.map((message, i) => {
                    return <Message currentUser={this.props.currentUser} message={message} key={i}/>
                })}
                </div>
        
                <div className="message">
                    <input className="usermsg form-control" type="text" ref={(inp) => this.input = inp} id="usermsg" size="63" />
                    <button className="submitmsg btn" onClick={this.sendMessage.bind(this)}>Send</button>
                </div>
            </div>
        </div>
        )
    }
}

Chat.propTypes = {
    chat: PropTypes.object.isRequired
};

export default Chat;
