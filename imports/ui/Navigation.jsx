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
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">HelpAStranger</a>
                    </div>
                    <div className="nav navbar-nav navbar-left">
                        <a className="boton-login"><AccountsUIWrapper/></a>
                    </div>
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