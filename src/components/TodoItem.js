import React from 'react';
import './TodoItem.css'

class TodoItem extends React.Component {

    componentDidMount(){
       /*
        Says something like the component just mounts to the screen
        The first time that the component is mount this method will be executed (Only run once)

        Most common uses on Rest API calls (Load some kin of data)
       */ 
    }

    // DEPRECATED the nextProps are the new props passed to the component
    componentWillReceiveProps(nextProps) {
        /*
        Every time that the component receives props from a parten component thgis method gets executed

        Most common uses to compare the infomration that is comming again to de component and try to do 
        some kind of manipulation with the new data that its comming from the parent
        */
    }

    componentDidUpdate(prevProps, prevState) {
        /* Perform actios every time that the component has an update on its loaded information */
    }

    shouldComponentUpdate(nextProps, nextState) {
        /*
        React by default will re render all the components that are included on the parent, thats costly
        so you can avoid this rerender cycle (youll need to specify the logic for avoid the render)

        return true/false (if want to rerender or not)
        */
    }

    componentWillUnmount() {
        /*
        Cleanup before your componen disappears

        Main use case (cleanup, teardown)
        Common use its for closing events listeners that you create on componentDidMount method.
        */
    }

    // New lifecycles
    
    // this one its not commonly used
    static getDerivedstateFromProps() {
        
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    // not a common used react Lifecyle
    getSnapshotBeforeUpdate() {
        // Allows you to create a backup of the current way things are.
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }

    render() {
        let taskStyle = {
            color: !this.props.item.status || this.props.item.status === 'NOTDONE' ? 'red' : 'blue'
        }

        return (
            <div className="todo-item">
                {/* As you can see we are using an anon function in order to call the function given by the parent element that pass the function via props. */}
                {/* If you can the function directly the function gets executed the number of times that is rendered on the other side. */}
                <input type="checkbox" 
                checked={this.props.item.completed} 
                onChange={() => this.props.handleChange(this.props.item.id)}
                />
                {/*the item.message property can be handled here (given the proprs of the component)*/}
                <p style={taskStyle}> {this.props.item.message}</p>
            </div>
        );
    }
}

export default TodoItem;