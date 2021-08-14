import React from 'react'
import TodoListItem from './TodoListItem'
import './style/TodoListStyle.scss';

const Todolist = ({ todos, onRemove }) => {
  return (
  	<>
      <div className='TodoList'>
        {todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>
        ))}
      </div>     
  	</>
  )
}

export default Todolist