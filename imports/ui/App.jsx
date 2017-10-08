import React, {Component} from "react";
import PropTypes from "prop-types";
import {createContainer} from "meteor/react-meteor-data";

import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import PostViewer from "./PostViewer.jsx";
import Chat from "./Chat.jsx";

import {Posts} from "../api/Posts.js";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser : null
        }
    }

    render(){
        return (
            <div  className="app">
                <Navigation user={this.state.currentUser}/>
                <div className="container">
                    <div className="row">
                        <Menu/>
                        <PostViewer posts={this.props.posts}/>
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