import React from 'react';
import TodoItem from './TodoItem'
import './Todo.css'


class Todo extends React.Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            tasks: [],
            newTask: {
                name: 'The new task name....',
                isImportant: true,
                backColor: 'default'
            }
        };
        this.printCount =  this.printCount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.processInfo = this.processInfo.bind(this);
        this.handleChangeFormTask =  this.handleChangeFormTask.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState(
            {
                loading: true,
                tasks: []
            }
        )

        fetch("http://localhost:3001/")
        .then(response => response.json())
        .then(data => this.setState({loading: false, tasks: data}));
    }

    processInfo() {
        this.state.tasks
        .map(task => {
            task.completed = (task.status === "NOTDONE" ? false : true);
            return task;
        })
        //.filter(task => task.deadline ? new Date(task.deadline) > new Date() && task.status === 'NOTDONE' : task)
        .filter(task => task.deadline ? new Date(task.deadline) > new Date() : task)
        .sort((task1, task2) => task1.deadline > task2.deadline);
    }

    printCount(){
        console.log(this.state.tasks.length);
    }

    handleChange(id) {
        // here we use the prev state, cuz the change is based on the preious state of the task...
        this.setState(prevState => {
                const updatedTasks = prevState.tasks.map(task => {
                    if (task.id === id) {
                        /* The tasks status property cannot be modified directly because we are changing the prevState values
                          task.status = (task.status === "NOTDONE" ? "DONE" : "NOTDONE");
                          a better way to do that is return a new object with the modified status */
                        return {
                            ...task, // cloning the object 
                            status : (task.status === "NOTDONE" ? "DONE" : "NOTDONE") // change the status attribute value
                        }
                    }
                    return task;
                });
                return {
                    tasks: updatedTasks
                };
            }            
        )
    }


    handleChangeFormTask(event) {
        // we need handle the change of this input in order to stablish a new state of that value
        
        // Destructuring (this helps to avoid problems related with access directly the event value)
        const {name, value, type, checked} = event.target;

        type === "checkbox" ? 

        // in order to have updated the entire object you have to set to the new state the values of the prevState 
        // and then modify the value of the attribute that you need to change.
        this.setState(prevState => {
            return {
                newTask: {
                    ...prevState.newTask,
                    [name] : checked
                }
            }
        }) : 
        this.setState(prevState => {
            return {
                newTask: {
                    ...prevState.newTask,
                    [name] : value
                }
            }
        });

    }

    handleSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        /* this keyword is needed for access your own methods on the class */
        this.processInfo();
        let taskComponents =  this.state.tasks.map(task => <TodoItem key={task.id} item={task} handleChange={this.handleChange}/>)
        return (
            <div>
            {   this.state.loading ? 
                <p> Loading . . . </p> :
                <div className="todo-list">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" placeholder="New task info" onChange={this.handleChangeFormTask}/>
                            {/* <p>{this.state.newTask.name}</p> */}
                        </label>
                        <br/>
                        <label>
                            Important:
                            <input name="isImportant" type="checkbox" checked={this.state.newTask.isImportant} onChange={this.handleChangeFormTask}/>
                        </label>
                        <br/>
                        <br/>
                        <label>
                            Long task
                            <input name="size" type="radio" value="long" checked={this.state.newTask.size === 'long'} onChange={this.handleChangeFormTask}/>
                        </label>
                        <br/>
                        <label>
                            Short task
                            <input name="size" type="radio" value="short" checked={this.state.newTask.size === 'short'} onChange={this.handleChangeFormTask}/>
                        </label>
                        <br/>
                        <label>Background Color:</label>
                        <select value={this.state.newTask.backColor} onChange={this.handleChangeFormTask} name="backColor">
                            <option value="default">Default</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                        </select>
                        <br/>
                        <button>Add Task</button>
                    </form>

                    {taskComponents}
                    {/*Camel cased functions (but same as a plain javascript handler [onclick])*/}
                    {/*The funciton needs to be called in this way this.functionName*/}
                    <button onClick={this.printCount}> Print Count Tasks</button>
                </div>            
            }
            </div>        
        );
    }

}

export default Todo;