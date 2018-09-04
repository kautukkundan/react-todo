import React, { Component } from 'react';

class Todo extends Component {
    render() { 
        return ( 
            <div className='delete' onClick={() => this.props.onDelete(this.props.id)}>
                <ul>
                    <li><h1 className='task'>{this.props.task}</h1></li>
                </ul>
            </div>
        );
    }
}
 
export default Todo;