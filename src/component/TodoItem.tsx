import React, { ReactChild } from 'react'
import './TotoItem.css';

/**
 * Item 정의 따로 분리 
 * TodoList에서 변수로 받을때 한번 더 사용할려고 
 */
interface TodoItemProps {
  id: number
  text: string
  checked: boolean
}

interface TodoItemEvent {
  onToggle: any
  onRemove: any
}

type Props = TodoItemProps & TodoItemEvent;

const TodoItem: React.FC<Props> = ({ id, text, checked, onToggle, onRemove
}) => {
  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div className="remove" onClick={(e) => {
        e.stopPropagation()
        onRemove(id)
      }}>X</div>
      <div className={`todo-text ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>
      {
        checked && (<div className="check-mark">✓</div>)
      }
    </div>
  )
}

export { TodoItem };
export type { TodoItemProps };
