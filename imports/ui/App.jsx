import React, {Component} from "react";
import PropTypes from "prop-types";
import {createContainer} from "meteor/react-meteor-data";

import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import PostViewer from "./PostViewer.jsx";
import Chat from "./Chat.jsx";

import {Posts} from "../api/Posts.js";
import {Chatrooms} from "../api/Chatrooms.js";
import {Anons} from "../api/Anons.js";
import {UserInfo} from "../api/UserInfo.js";


import "./App.css";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser : null,
            messages: [
                {
                    text: "hello",
                    author: "anontest",
                    date: (new Date()).getTime()
                }
            ]
        }
    }

    componentWillUpdate(newProps){
        if (!this.state.currentUser && newProps.user) {
            this.onUserEnter(newProps.user.userName)
        }
    }

    onUserEnter(userName){
        const userID = Meteor.users.findOne({userName});
        console.log(userID);
    }

    sendMessage(text) {
        let newMessage = {
            text: "hi",
            author: "anontest2",
            date: (new Date()).getTime()
        }
        this.setState({
            messages: messages.append(newMessage)
        });
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
        Meteor.call('posts.insert', newPost);
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
                        <Chat messages={this.state.messages} newMessage={this.sendMessage.bind(this)}/>
                    </div>
                </div>
                <Footer count = {1}/>
            </div>)
    }
}

App.propTypes = {
    posts : PropTypes.array.isRequired,
    user : PropTypes.object,
    chats : PropTypes.array.isRequired
};

export default createContainer(()=>{

    Meteor.subscribe("posts");
    Meteor.subscribe("anons");

    return { posts : Posts.find({}, { sort: { date: -1 } }).fetch(),
             user : Meteor.user(),
             chats : Chatrooms.find({}).fetch(),        
    };
}, App);