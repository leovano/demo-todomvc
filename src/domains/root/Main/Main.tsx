import { Route, Switch } from "wouter-preact";
import App from "../../main/App";
import TodoItemStatus from "../../main/common/TodoItemStatus";
import GlobalStyle from "./GlobalStyle";

const Main = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route path="/">
        <App status={TodoItemStatus.All} />
      </Route>
      <Route path={`/${TodoItemStatus.Active}`}>
        <App status={TodoItemStatus.Active} />
      </Route>
      <Route path={`/${TodoItemStatus.Completed}`}>
        <App status={TodoItemStatus.Completed} />
      </Route>
    </Switch>
  </>
);

export default Main;
