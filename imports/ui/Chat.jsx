import React, {Component} from "react";
import PropTypes from "prop-types";

class Chat extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div  className="chat col-md-5">
                Chat
            </div>
        )
    }
}

Chat.propTypes = {
    
};

export default Chat;