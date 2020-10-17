import React from 'react';
import TodoItem from './TodoItem'
import './Todo.css'

import tasks from './../data/tasks.json'

class Todo extends React.Component {

    processInfo() {

        // let taskComponents = tasks.map(task => (<TodoItem key={task.id} item={{message: task.message, status: task.status}}></TodoItem>));    

        return tasks
        .map(task => {
            task.completed = task.status === "NOTDONE" ? false : true;
            return task;
        })
        //.filter(task => task.deadline ? new Date(task.deadline) > new Date() && task.status === 'NOTDONE' : task)
        .filter(task => task.deadline ? new Date(task.deadline) > new Date() : task)
        .sort((task1, task2) => task1.deadline > task2.deadline)
        .map(task => <TodoItem key={task.id} item={task} />);
    }

    render() {
        /* this keyword is needed for access your own methods on the class */
        let taskComponents = this.processInfo();
        return (
            <div className="todo-list">
                {taskComponents}
            </div>        
        );
    }

}

export default Todo;