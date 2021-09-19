import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Landing from "./pages/Landing";
import ChooseUser from "./pages/ChooseUser";
import LogInUser from "./pages/LogInUser";
import LogInGuest from "./pages/LogInGuest";
import SignUpModal from "./pages/SignUpModal";
import Overview from "./pages/Overview";
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Landing />
          {/* <Overview/> */}
        </Route>
        <Route exact path="/sign-up">
          {/* <SignUp1/> */}
          <ChooseUser />
        </Route>

        <Route exact path="/sign-as-user">
          {/* <SignUp1/> */}
          {/* <SignUp1 /> */}
          <SignUpModal/>
        </Route>

        <Route exact path="/sign-as-guest">
          {/* <SignUp1/> */}
          <LogInGuest />
        </Route>

        <Route exact path="/log-in">
          <LogInUser />
        </Route>
        <Route exact path="/overview"></Route>
      </Switch>
    </Router>
  );
};

export default App;
