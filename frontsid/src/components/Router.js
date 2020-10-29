import {HashRouter as Router, Switch, Redirect,Route} from 'react-router-dom';
import MainPage from "../Router/MainPage";
import Homepage from '../Router/Homepage';
const AppRoute = ({isLoggedIn}) =>{
  return(
  <Router>
    {!isLoggedIn && <MainPage/>}
    {isLoggedIn && 
    (<Switch>
      <Route exact path="/home">
        <Homepage/>
      </Route>
      <Redirect from='*' to="/home" />
    </Switch>)}
  </Router>);
}

export default AppRoute;