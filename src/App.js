import React from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends React.Component {

  // initialize the class like on any other OOP language
  constructor() {
    super(); // go to the supperclass to initialize that class
    // now we have an state on our component that can be touched on any place of the Component using this keyword
    this.state = {
      answer : "yes"
    } 
  }

  render() {
      return (
        <div>
          <Todo/> 
          {/* 
          <h1> Is state important to know?</h1>
          <p>{this.state.answer}</p>
          */}
        </div>
      )
  }
}

export default App;
