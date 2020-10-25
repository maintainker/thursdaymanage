import {HashRouter as Router, Switch, Redirect,Route} from 'react-router-dom';
import MainPage from "../Router/MainPage";
import Register from './RegisterPage';
const AppRoute = ({isLoggedIn}) =>{
  return(
  <Router>
    
    {!isLoggedIn && <MainPage/>}
    {isLoggedIn && 
    <Switch>
      dd
      <Route  exact path="/register">
        <Register/>
      </Route>
      <Redirect from='*' to="/" />
    </Switch>}
  </Router>);
}

export default AppRoute;