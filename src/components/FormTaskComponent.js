import React from "react"

function FormTaskComponent(props) {
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" placeholder="New task info" onChange={(e) => props.handleChangeFormTask(e)}/>
                </label>
                <br/>
                <label>
                    Important:
                    <input name="isImportant" type="checkbox" checked={props.newTask.isImportant} onChange={(e) => props.handleChangeFormTask(e)}/>
                </label>
                <br/>
                <br/>
                <label>
                    Long task
                    <input name="size" type="radio" value="long" checked={props.newTask.size === 'long'} onChange={(e) => props.handleChangeFormTask(e)}/>
                </label>
                <br/>
                <label>
                    Short task
                    <input name="size" type="radio" value="short" checked={props.newTask.size === 'short'} onChange={(e) => props.handleChangeFormTask(e)}/>
                </label>
                <br/>
                <label>Background Color:</label>
                <select value={props.newTask.backColor} onChange={(e) => props.handleChangeFormTask(e)} name="backColor">
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
        </main>
    )
}

export default FormTaskComponent;
