import React from 'react';
import TodoItem from './TodoItem'
import './Todo.css'

function Todo(props) {
    return (
        <div className="todo-list">
            {/*passing item argument as a member of proprs with the message attribute*/}
            <TodoItem item={{message: 'first task', status: 'NOTDONE'}}/>
            <TodoItem item={{message: 'second task', status: 'NOTDONE'}}/>
            <TodoItem item={{message: 'third task'}}/>
            <TodoItem item={{message: 'fourth task', status: 'DONE'}}/>
        </div>
    );
}

export default Todo;