import {HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import LoginPage from "../Router/LoginPage";
const AppRoute = ({isLoggedIn}) =>{
  return(
  <Router>
    {!isLoggedIn && <LoginPage/>}
    {isLoggedIn && 
    <Switch>

      <Redirect from='*' to="/" />
    </Switch>}
  </Router>);
}

export default AppRoute;