import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay = hours < 12 ? "morning" : hours >= 12 && hours <= 17 ? "afternoon" : "night";

  const styles = {
    color: "red", 
    backgroundColor: "black",
    fontSize: 20
  };

  return (
    <div className="App">
      <h1 style={styles}> Good {timeOfDay} </h1>
    </div>
  );
}

export default App;
