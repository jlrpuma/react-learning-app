import React from 'react';
import TodoItem from './TodoItem'
import './Todo.css'

import tasks from './../data/tasks.json'

class Todo extends React.Component {

    constructor() {
        super();
        this.state = {
            tasks: tasks
        };
    }


    processInfo() {
        this.state.tasks
        .map(task => {
            task.completed = task.status === "NOTDONE" ? false : true;
            return task;
        })
        //.filter(task => task.deadline ? new Date(task.deadline) > new Date() && task.status === 'NOTDONE' : task)
        .filter(task => task.deadline ? new Date(task.deadline) > new Date() : task)
        .sort((task1, task2) => task1.deadline > task2.deadline);
    }

    render() {
        /* this keyword is needed for access your own methods on the class */
        let taskComponents =  this.state.tasks.map(task => <TodoItem key={task.id} item={task} />)
        return (
            <div className="todo-list">
                {taskComponents}
            </div>        
        );
    }

}

export default Todo;