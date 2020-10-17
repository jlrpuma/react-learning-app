import React from 'react';
import TodoItem from './TodoItem'
import './Todo.css'

import tasks from './../data/tasks.json'

function Todo(props) {
    // let taskComponents = tasks.map(task => (<TodoItem key={task.id} item={{message: task.message, status: task.status}}></TodoItem>));    
    let taskComponents = 
    tasks
    .filter(task => task.deadline ? new Date(task.deadline) > new Date() && task.status === 'NOTDONE' : task)
    .sort((task1, task2) => task1.deadline > task2.deadline)
    .map(task => <TodoItem key={task.id} item={{message: task.message, status: task.status}} />)
    
    
    return (
        <div>
            {taskComponents}
        </div>
    );
}

export default Todo;