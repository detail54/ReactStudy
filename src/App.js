import React from "react";
import { Link, Route } from "react-router-dom";
import RouterTutorialIndex from "./components/routertutorial/RouterTutorialIndex";
import TodoIndex from './components/todo/TodoIndex';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/todo">일정관리</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={RouterTutorialIndex} exact={true}/>
      <Route path="/todo" component={TodoIndex} />
    </>
  )
};

export default App;
