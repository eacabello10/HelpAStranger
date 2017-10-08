import React, {Component} from "react";
import PropTypes from "prop-types";

import InputUser from "./InputUser.jsx";
import Chat from "./Chat.jsx";

import { Users } from "../api/users.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.onEnterUser = this.onEnterUser.bind(this);

		this.width = 350;
		this.height = 350;
		this.state = {
			users : [{
				name: "Eduardo",
				x: 300,
				y: 300
			}]
		};
	}

	onEnterUser(username) {
		console.log(username);
		let user = {
			name: username,
			x: this.width - 50,
			y: this.height - 50
		};
		user._id = Users.insert(user);

		this.setState({
			currentUser: user
		});
	}

	render() {
		return(<div className="App">
			<InputUser onClick = {this.onEnterUser}></InputUser>
			<Chat
			width={this.width} 
			height={this.height}
			users={this.state.users}></Chat>
			</div>);
	}
}

App.propTypes = {

};

export default App;