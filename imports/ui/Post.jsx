import React, {Component} from "react";
import PropTypes from "prop-types";

import "./Post.css";

class Post extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div  className="post">
                <div className="row">
                    <div className="post-text">{this.props.post.text}</div>
                </div>
                <div className="row">
                    <div className="buttonDiv">
                        <button className="btn btn-success col-md-4" onClick={() => {this.props.vote("animo", this.props.post._id)}}>Animo {this.props.post.animos}</button>
                        <button className="btn btn-info col-md-4" onClick={() => {this.props.vote("nogive", this.props.post._id)}}>No te Rindas {this.props.post.nogive}</button>
                        <button className="btn btn-danger col-md-4" onClick={() => {this.props.vote("better", this.props.post._id)}}>Todo mejorará {this.props.post.better}</button>
                    </div>
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    post : PropTypes.object.isRequired,
    vote : PropTypes.func.isRequired
};

export default Post;