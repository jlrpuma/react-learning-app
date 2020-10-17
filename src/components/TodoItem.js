import React from 'react';
import Todo from './Todo';
import './TodoItem.css'


function TodoItem(props) {

    let taskStyle = {
        color: !props.item.status || props.item.status === 'NOTDONE' ? 'red' : 'blue'
    }

    return (
        <div>
            <input type="checkbox"/>
            {/*the item.message property can be handled here (given the proprs of the component)*/}
            <p style={taskStyle}> {props.item.message}</p>
        </div>
    );
}

export default TodoItem;