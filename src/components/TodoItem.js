import React from 'react';
import './TodoItem.css'

class TodoItem extends React.Component {

    render() {
        let taskStyle = {
            color: !this.props.item.status || this.props.item.status === 'NOTDONE' ? 'red' : 'blue'
        }

        return (
            <div className="todo-item">
                {/* As you can see we are using an anon function in order to call the function given by the parent element that pass the function via props. */}
                {/* If you can the function directly the function gets executed the number of times that is rendered on the other side. */}
                <input type="checkbox" 
                checked={this.props.item.completed} 
                onChange={() => this.props.handleChange(this.props.item.id)}
                />
                {/*the item.message property can be handled here (given the proprs of the component)*/}
                <p style={taskStyle}> {this.props.item.message}</p>
            </div>
        );
    }
}

export default TodoItem;