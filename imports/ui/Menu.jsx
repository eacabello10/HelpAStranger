import React, {Component} from "react";
import PropTypes from "prop-types";


import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class Menu extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div  className="menu col-md-2">
                <AccountsUIWrapper />
            </div>
        )
    }
}

Menu.propTypes = {
    
};

export default Menu;