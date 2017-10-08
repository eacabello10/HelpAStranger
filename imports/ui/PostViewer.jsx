import React, {Component} from "react";
import PropTypes from "prop-types";

class PostViewer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div  className="postViewer col-md-5">
                Chat
            </div>
        )
    }
}

PostViewer.propTypes = {
    
};

export default PostViewer;