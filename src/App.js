import React from "react";
import { Link, Route } from "react-router-dom";
import HistoryTutoIndex from "./components/historytutorial/HistoryTutoIndex";
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
        <li>
          <Link to="/history">히스토리</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={RouterTutorialIndex} exact={true}/>
      <Route path="/todo" component={TodoIndex} />
      <Route path="/history" component={HistoryTutoIndex} />
    </>
  )
};

export default App;
