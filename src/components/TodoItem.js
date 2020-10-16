import React from 'react';
import Todo from './Todo';
import './TodoItem.css'


function TodoItem(props) {
    return (
        <div>
            <input type="checkbox"/>
            <p> {props.item.message}</p>
        </div>
    );
}

export default TodoItem;