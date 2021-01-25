import React, { Component, EventHandler } from 'react';
import './App.css';
import TodoTemplate from './template/TodoTemplate';
import Form from './Form';
import TodoList from './TodoList';
import { TodoItem, TodoItemProps } from './TodoItem';

class TodoApp extends React.Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ] as TodoItemProps[]
  }

  /**
   * 
   * @param e 이거에 대한 타입이 멍렇냐..;;;
   */
  handleChange = (e: {target:HTMLInputElement}) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      } as TodoItemProps
      )
    });
  }

  handleKeyPress = (e: KeyboardEvent) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id:number) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]

    const newTodos = [...todos]
    newTodos[index] = {
      ...selected,
      checked : !selected.checked
    }

    this.setState({
      todos : newTodos
    })
  }

  handleRemove = (id:number) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {

    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoTemplate
        form={<Form value={input} onChange={handleChange} onKeyPress={handleKeyPress} onCreate={handleCreate} />}
        todoList={
          <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        }
      />
    )
  }
}

export default TodoApp;
