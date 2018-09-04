import React, { Component } from "react";
// import "./App.css";

import Title from "./components/title";
import Input from "./components/inputbox";
import Todos from "./components/todos";

class App extends Component {
	state = {
		todos: []
	};

	handleAdd = e => {
		e.preventDefault();

		const task = e.target.elements.todo.value;
		if (task) {
			const todos = this.state.todos;

			e.target.elements.todo.value = null;

			const todo = {
				id: todos.length,
				task: task
			};

			todos.push(todo);
			this.setState({
				todos
			});
		}
	};

	handleDelete = Tid => {
		const todos = this.state.todos.filter(c => c.id !== Tid);
		this.setState({ todos });
	};

	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-5 title-container">
									<Title count={this.state.todos.length} />
								</div>
								<div className="col-md-7 form-container">
									<div className="heading">Add your Tasks</div>
									<Input onAdd={this.handleAdd} />
									<div className="content">
										<Todos
											todos={this.state.todos}
											onDelete={this.handleDelete}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
