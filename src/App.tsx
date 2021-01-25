import React from 'react';
import logo from './logo.svg';
import './App.css';

class TodoApp extends React.Component {

  render(){
    return (
      <div className="App">
        <div className="cardHeader">
          <input id="newTodo"className="todo"/>
          <button id="addTodo"></button>
        </div>
        <div className="cardBody">

        </div>
      </div>
    )
  }
}

export default TodoApp;
