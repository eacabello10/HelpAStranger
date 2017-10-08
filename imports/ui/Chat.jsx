import React, {Component} from "react";
import PropTypes from "prop-types";

import "./Chat.css";

class Chat extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div  className="chat col-md-5">
            <div id="menu">
                <p class="welcome">Welcome, <b></b></p>
                <p class="logout"><a id="exit" href="#">Exit Chat</a></p>
            </div>
     
            <div id="chatbox"></div>
     
            <form name="message" action="">
                <input name="usermsg" type="text" id="usermsg" size="63" />
                <input name="submitmsg" type="submit"  id="submitmsg" value="Send" />
            </form>
        </div>
        )
    }
}

Chat.propTypes = {
    
};

export default Chat;
