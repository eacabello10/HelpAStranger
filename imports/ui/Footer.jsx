import React, {Component} from "react";
import PropTypes from "prop-types";

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="footInfo">
                <footer className="fixed-bottom">
                    <div className="row">
                        <div className="col-sm-6">
                            <p id="copy">&copy; 2017 Jairo Emilio Bautista Mora &amp; Eduardo Cabello</p>
                        </div>
                        <div className="col-sm-6"> 
                            <p>Gente ayudada {this.props.help}</p>
                            <p>Posts Publicados {this.props.posted}</p>
                            <p>Salas de Chat ayudada {this.props.rooms}</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

Footer.propTypes = {
    help : PropTypes.number.isRequired,
    posted : PropTypes.number.isRequired,
    rooms : PropTypes.number.isRequired
};

export default Footer;