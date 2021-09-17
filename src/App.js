import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Landing from "./pages/Landing";
import BodyWrapper from "./components/BodyWrapper";
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Landing/>
          {/* <Form/> */}
          {/* <BodyWrapper/> */}
        </Route>
        <Route exact path="/overview">
         
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
