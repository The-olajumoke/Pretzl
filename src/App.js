import './App.css';
import {Router,Route,Switch} from "react-router-dom"
import history from './utils/history';
import Landing from './pages/Landing';
const  App=()=> {
  return (
  <Router history={history}>
    <Landing/>
    <Switch>
      <Route exact path="/">
      </Route>
      <Route path="/sign-up">

      </Route>
      <Route path="/login"></Route>
    </Switch>
  </Router>
  );
}

export default App;
