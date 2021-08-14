import React, { useState, useRef, useCallback } from 'react'
import TodoInsert from './TodoInsert';
import Todolist from './Todolist';
import TodoTemplate from './TodoTemplate';

const Todoindex = () => {
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


  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <Todolist todos={todos}/>
    </TodoTemplate>
  )
}

export default Todoindex
