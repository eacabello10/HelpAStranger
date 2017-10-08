import React, {Component} from "react";
import PropTypes from "prop-types";
import {createContainer} from "meteor/react-meteor-data";

import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import PostViewer from "./PostViewer.jsx";
import Chat from "./Chat.jsx";

import {Posts} from "../api/Posts.js";


import "./App.css";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser : null
        }
    }

    newPost(text){
        let newPost = {
            text : text,
            author : "anontest",
            date : (new Date()).getTime(),
            animos : 0,
            nogive : 0,
            better : 0,
            keywords : []
        }
        Posts.insert(newPost);
        console.log(this.props.posts);
    }

    render(){
        return (
            <div  className="app">
                <Navigation user={this.state.currentUser}/>
                
                <div className="container-fluid">
                    <div className="row">
                        <Menu/>
                        <PostViewer posts={this.props.posts} addpost={this.newPost.bind(this)}/>
                        <Chat/>
                    </div>
                </div>
                <Footer count = {1}/>
            </div>)
    }
}

App.propTypes = {
    posts : PropTypes.array.isRequired
};

export default createContainer(()=>{
    return { posts : Posts.find({}).fetch()};
}, App);