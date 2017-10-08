import React, {Component} from "react";
import PropTypes from "prop-types";
import {createContainer} from "meteor/react-meteor-data";

import Navigation from "./Navigation.jsx";

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
            </div>)
    }
}

App.propTypes = {
    posts : PropTypes.array.isRequired
};

export default createContainer(()=>{
    return { posts : Posts.find({}).fetch()};
}, App);