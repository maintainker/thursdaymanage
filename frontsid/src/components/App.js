import { useState, useEffect } from "react";
import AppRouter from './Router';
import {authService,dbService} from '../fbase';
import { Link,useHistory } from "react-router-dom";
function App({location}) {
  const history = useHistory();
  console.log(location)
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userObj,setUserObj] =useState(null);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
        const {uid} =user
        dbService.collection(`management/user/${uid}/`).onSnapshot((snapshot)=>{
          const userArr = snapshot.docs.map(doc=>({id:doc.id,...doc.data()}))
          if(userArr.length === 0&&window.confirm("회원이 아닙니다. 회원가입 하시겠습니까?")){
            
          }else if(userArr.length > 0){
            setUserObj(userArr[0])
            setIsLoggedIn(true);
            <Link to="/home" />
          }else{
            history.push("/");
            authService.signOut();
          }
        })
      }else{
        setUserObj(null);
        setIsLoggedIn(false);
      }
    })
  },[])
  return (
    <AppRouter isLoggedIn={isLoggedIn}>
      
    </AppRouter>
  );
}

export default App;