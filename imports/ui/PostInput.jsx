import React, {Component} from "react";
import PropTypes from "prop-types";

import "./PostInput.css";

class PostInput extends Component {
    constructor(props){
        super(props);
        
    }

    sendPost(){
        this.props.addpost(this.text.value);
    }

    render(){
        return (
            <div className="postInput">
                <div className="row">
                    <div className="form-group">
                        <textarea placeholder="Escribe tu historia" maxLength="200" 
                        className="form-control" rows="5" ref={(textarea) => this.text = textarea}></textarea>
                    </div> 
                </div>
                <div className="row">
                    <button className="btn btn-success col-md-12" onClick={this.sendPost.bind(this)}>Enviar</button>
                </div>
            </div>
        )
    }
}

PostInput.propTypes = {
    addpost : PropTypes.func.isRequired
};

export default PostInput;