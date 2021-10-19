import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import contextIndex from "./components/contexttutorial/contextIndex";
import HistoryTutoIndex from "./components/historytutorial/HistoryTutoIndex";
import RouterTutorialIndex from "./components/routertutorial/RouterTutorialIndex";
import TodoIndex from './components/todo/TodoIndex';

const App = () => {

  const activeStyleProps = {
    background: 'black',
    color: 'white'
  }

  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <NavLink activeStyle={activeStyleProps} to="/todo">일정관리</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyleProps} to="/history">히스토리</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyleProps} to="/contexttuto">context튜토</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={RouterTutorialIndex} exact={true}/>
        <Route path="/todo" component={TodoIndex} />
        <Route path="/history" component={HistoryTutoIndex} />
        <Route path="/contexttuto" component={contextIndex} />
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
