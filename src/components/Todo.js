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

        // i dont like the way that you need to bind the function in the constructor before can use it on the render method
        // this is needed if you want to use the state variable on that method
        this.printCount =  this.printCount.bind(this);
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

    printCount(){
        console.log(this.state.tasks.length);
    }

    render() {
        /* this keyword is needed for access your own methods on the class */
        this.processInfo();
        let taskComponents =  this.state.tasks.map(task => <TodoItem key={task.id} item={task} />)
        return (
            <div className="todo-list">
                {taskComponents}
                {/*Camel cased functions (but same as a plain javascript handler [onclick])*/}
                {/*The funciton needs to be called in this way this.functionName*/}
                <button onClick={this.printCount}> Print Count Tasks</button>
            </div>        
        );
    }

}

export default Todo;