import React from 'react';
import Todo from './Todo';
import './TodoItem.css'


function TodoItem(props) {
    return (
        <div>
            <input type="checkbox"/>
            {/*the item.message property can be handled here (given the proprs of the component)*/}
            <p> {props.item.message}</p>
        </div>
    );
}

export default TodoItem;