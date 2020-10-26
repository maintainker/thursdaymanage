import { useState, useEffect } from "react";
import AppRouter from './Router';
import {authService} from '../fbase';
import {checkIdAfterLogin} from "../requesters/userCheck"
function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userObj,setUserObj] =useState(null);
  useEffect(()=>{
    if(false){
      authService.onAuthStateChanged((user)=>{
        console.log(user)
        if(user){
          const {displayName,email,photoURL,uid} =user
          const dbUser = checkIdAfterLogin(displayName,email,photoURL,uid)
          setIsLoggedIn(true);
          setUserObj({
            displayName : user.displayName,
            uid:user.uid,
            updateProfile: (arg) => user.updateProfile(arg)
          });
        }else{
          setUserObj(null);
          setIsLoggedIn(false);
        }
      })
    }
  },[])
  return (
    <AppRouter isLoggedIn={isLoggedIn}>
      
    </AppRouter>
  );
}

export default App;