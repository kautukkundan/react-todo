import React, { Component } from 'react';
import Todo from './todo';

class Todos extends Component {
    render() { 
        return ( 
            <React.Fragment>
                {this.props.todos.map(todo=>
                    <Todo 
                        onDelete = {this.props.onDelete}
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                    />
                )}
            </React.Fragment>
         );
    }
}

export default Todos;