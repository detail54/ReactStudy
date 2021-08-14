import React, { useState } from "react";
import TodoInsert from "./components/todo/TodoInsert";
import Todolist from "./components/todo/Todolist";
import TodoTemplate from "./components/todo/TodoTemplate";

const App = () => {
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <Todolist todos={todos}/>
    </TodoTemplate>
  )
};

export default App;
