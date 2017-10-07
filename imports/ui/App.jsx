import React, {Component} from "react";
import PropTypes from "prop-types";
import {createContainer} from "meteor/react-meteor-data";

import {Posts} from "../api/Posts.js";

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div  className="app">
                Hola
            </div>)
    }
}

App.propTypes = {
    posts : PropTypes.array.isRequired
};

export default createContainer(()=>{
    return { posts : Posts.find({}).fetch()};
}, App);