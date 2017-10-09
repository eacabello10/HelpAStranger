import React, {Component} from "react";
import PropTypes from "prop-types";

import Post from "./Post.jsx";
import PostInput from "./PostInput.jsx";
import "./PostViewer.css";

class PostViewer extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <div className="postViewer col-sm-5">
                {!Meteor.user() ? <div id="bienvenida">
                    <h1 className="bien">Bienvenidos a HelpAStranger</h1>
                    <h4 className="bien">Si desea crear una historia o unirse a un chat actual, debe logearse primero.</h4>
                </div> : <PostInput addpost={this.props.addpost}/> }
                <div className="posts">
                    {this.props.posts.map((post, i) => {
                        return <Post post={post} key={i} vote={this.props.vote}/>
                    })}
                </div>
            </div>
        )
    }
}

PostViewer.propTypes = {
    addpost : PropTypes.func.isRequired,
    vote : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired
};

export default PostViewer;