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
                    date: (new Date()).toDateString() + " " + (new Date()).toLocaleTimeString() 
                }
            ]
        }
    }

    componentWillUpdate(newProps){
        if (!this.state.currentUser && newProps.user) {
            this.onUserEnter(newProps.user.username)
        } 
        if (this.state.currentUser && newProps.user === null) {
            this.setState({
                currentUser : null
            });
        }
    }

    onUserEnter(userName){
        var yo = this;
        Tracker.autorun (function() {
            const userID = Meteor.user()._id;
            Meteor.call("user.find", userID, (error, result) => {
                if (result === null) {
                    Meteor.call("user.create", userID,  function (error, result) {
                        yo.setState({
                            currentUser : result
                        });
                    });
                } else {
                    yo.setState({
                        currentUser : result
                    });
                }
            });
        }); 
    }

    increaseFeel(feel, post){
        if(feel == "animo"){
            Meteor.call("posts.animo", post);
        } else if(feel == "nogive") {
            Meteor.call("posts.noGive", post);
        } else if(feel == "better"){
            Meteor.call("posts.better", post);
        }
    }

    sendMessage(text) {
        let author = this.state.currentUser.anon;
        let newMessage = {
            text: text,
            author: author,
            date: (new Date()).toDateString() + " " + (new Date()).toLocaleTimeString() 
        }
        this.setState({
            messages: this.state.messages.concat(newMessage)
        });
    }

    newPost(text){
        let newPost = {
            text : text,
            author : "anontest",
            date : (new Date()).toDateString() + " " + (new Date()).toLocaleTimeString(),
            animos : 0,
            nogive : 0,
            better : 0,
            keywords : []
        }
        Meteor.call('posts.insert', newPost);
    }

    render(){
        return (
            <div  className="app">
                <Navigation user={this.state.currentUser}/>
                
                <div className="container-fluid">
                    <div className="row">
                        <Menu/>
                        <PostViewer posts={this.props.posts} vote={this.increaseFeel.bind(this)}
                            addpost={this.newPost.bind(this)}/>
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