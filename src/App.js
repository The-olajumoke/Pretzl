import './App.css';
import {Router,Route,Switch} from "react-router-dom"
import history from './utils/history';
import Landing from './pages/Landing';
import {ChooseUser} from './pages/ChooseUser'
import LogIn from './pages/LogIn';
const  App=()=> {
  return (
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>
      {/* <Route path="/sign-up">
<ChooseUser/>
      </Route>
      <Route path="/log-in">
        <LogIn/>
      </Route> */}
    </Switch>
  </Router>
  );
}

export default App;
