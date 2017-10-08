import React, {Component} from "react";
import PropTypes from "prop-types";

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div  className="footInfo">
                <footer className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <p id="copy">&copy; 2017 Jairo Emilio Bautista Mora &amp; Eduardo Cabello</p>
                        </div>
                        <div className="col-sm-3">Gente ayudada {this.props.count}</div>
                    </div>
                </footer>
            </div>
        )
    }
}

Footer.propTypes = {
    count : PropTypes.number.isRequired
};

export default Footer;