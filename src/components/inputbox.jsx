import React, { Component } from "react";

class Input extends Component {
	render() {
		return (
			<form onSubmit={this.props.onAdd}>
				<input type="text" placeholder="What Next?" name="todo" />
				<button>ADD</button>
			</form>
		);
	}
}

export default Input;
