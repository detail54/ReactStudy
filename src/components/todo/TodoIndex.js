import React, { useState, useRef, useCallback } from 'react'
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

const TodoIndex = () => {
  const [ todos , setTodos ] = useState([
    {
      id: 1,
      text: '밥먹기',
      checked: true,
    },
    {
      id: 2,
      text: '씻기',
      checked: true,
    },
    {
      id: 3,
      text: '공부하기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
    </>
  )
  
};

export default TodoIndex
