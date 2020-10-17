import React from 'react';
import TodoItem from './TodoItem'
import './Todo.css'

function Todo(props) {
    return (
        <div className="todo-list">
            {/*passing item argument as a member of proprs with the message attribute*/}
            <TodoItem item={{message: "first task"}}/>
            <TodoItem item={{message: "second task"}}/>
            <TodoItem item={{message: "third task"}}/>
            <TodoItem item={{message: "fourth task"}}/>
        </div>
    );
}

export default Todo;