import React from 'react';
import TodoItem from './TodoItem'
import './Todo.css'

import tasks from './../data/tasks.json'

function Todo(props) {
    
    let taskComponents = tasks.map(task => (<TodoItem key={task.id} item={{message: task.message, status: task.status}}></TodoItem>));
    
    return (
        {taskComponents}
    );
}

export default Todo;