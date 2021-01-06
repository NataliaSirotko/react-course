import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <p>This is really working</p>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29" >My hobbies: Racing</Person>
      <Person name="Stepha" age="26" />
    </div>
  );
}

export default App;
