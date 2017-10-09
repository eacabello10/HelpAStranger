import React, {Component} from "react";
import PropTypes from "prop-types";

import Post from "./Post.jsx";
import PostInput from "./PostInput.jsx";

class PostViewer extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <div className="postViewer col-sm-5">
                {!Meteor.user() ? <div></div> : <PostInput addpost={this.props.addpost}/> }
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