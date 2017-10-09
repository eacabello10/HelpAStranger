import React, {Component} from "react";
import PropTypes from "prop-types";

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

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
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><AccountsUIWrapper></AccountsUIWrapper>Login</a></li>
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