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
                <PostInput addpost={this.props.addpost}/>
                {this.props.posts.map((post, i) => {
                    return <Post post={post} key={i}/>
                })}
            </div>
        )
    }
}

PostViewer.propTypes = {
    addpost : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired
};

export default PostViewer;