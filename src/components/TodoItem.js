import React from 'react';
import Todo from './Todo';
import './TodoItem.css'

class TodoItem extends React.Component {
    constructor() {
        super();
        
        this.onChangeTaskStatus =  this.onChangeTaskStatus.bind(this);
    }

    onChangeTaskStatus() {
        console.log("status change")
    }

    render() {
        let taskStyle = {
            color: !this.props.item.status || this.props.item.status === 'NOTDONE' ? 'red' : 'blue'
        }

        return (
            <div className="todo-item">
                <input type="checkbox" 
                checked={this.props.item.completed} 
                onChange={this.onChangeTaskStatus}/>
                {/*the item.message property can be handled here (given the proprs of the component)*/}
                <p style={taskStyle}> {this.props.item.message}</p>
            </div>
        );
    }
}

export default TodoItem;