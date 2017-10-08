import React, {Component} from "react";
import PropTypes from "prop-types";

import "./Chat.css";

class Messages extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div  className="messages col-sm-4">
            <div className="row">
                <div id="menu">
                    <p className="welcome">Welcome, <b></b></p>
                </div>
        
                <div id="chatbox"></div>
        
                <div className="message">
                    <input className="usermsg form-control" type="text" id="usermsg" size="63" />
                    <button className="submitmsg btn">Send</button>
                </div>
            </div>
        </div>
        )
    }
}

Messages.propTypes = {
    
};

export default Messages;
