import React, { Component, ReactChild } from 'react'
import {TodoItem, TodoItemProps } from './TodoItem'

/**
 * FormProps 정의
 */
interface TodoListProps{
    todos: TodoItemProps[]
    onToggle:any
    onRemove:any
}

const TodoList:React.FC<TodoListProps> = ({todos
  , onToggle, onRemove
}) => {    

  const todoList = todos.map(
    (todo) => (<TodoItem {...todo} onToggle={onToggle} onRemove={onRemove}/>)
  )
  return (
    <div>
      {todoList}
    </div>
  )
}

export default TodoList