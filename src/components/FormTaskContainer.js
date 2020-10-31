import React from "react"
import FormTaskComponent from "./FormTaskComponent"

class FormTaskContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: {
                name: '',
                isImportant: true,
                backColor: 'default'
            }
        }
        // This methods doesn't need to be binded on the constructor given they are using anon functions to work
        // this.handleChangeFormTask =  this.handleChangeFormTask.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFormTask = (event) => {
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
    
    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <FormTaskComponent {...this.state} handleChangeFormTask={this.handleChangeFormTask} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default FormTaskContainer;