import React from "react";
import { Link, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/" component={RouterTutorialIndex} exact={true}/>
        <Route path="/todo" component={TodoIndex} />
        <Route path="/history" component={HistoryTutoIndex} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </>
  )
};

export default App;
