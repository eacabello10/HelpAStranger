import React, {Component} from "react";
import PropTypes from "prop-types";

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

import "./Navigation.css";

class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div  className="navigationBar">
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#">HelpAStranger</a>
            </div>
            <ul class="nav navbar-nav navbar-left">
                <a className="boton-login"><AccountsUIWrapper></AccountsUIWrapper></a>
            </ul>
            </div>
            </nav>
        </div>
        )
    }
}

Navigation.propTypes = {
    user : PropTypes.object
};

export default Navigation;