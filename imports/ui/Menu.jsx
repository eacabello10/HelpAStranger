import React, {Component} from "react";
import PropTypes from "prop-types";

class Menu extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div  className="menu col-md-2">
                Chat
            </div>
        )
    }
}

Menu.propTypes = {
    
};

export default Menu;