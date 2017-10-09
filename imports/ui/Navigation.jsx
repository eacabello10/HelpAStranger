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
<<<<<<< HEAD
        <div  className="navigationBar">
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#">HelpAStranger</a>
            </div>
            <ul class="nav navbar-nav navbar-left">
                <a className="boton-login"><AccountsUIWrapper></AccountsUIWrapper></a>
            </ul>
=======
            <div className="navigationBar">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                            </button>
                            <a className="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><AccountsUIWrapper />Hola</li>
                            </ul>
                        </div>
                    </div>
                </nav>
>>>>>>> jairo
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