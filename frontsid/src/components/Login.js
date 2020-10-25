import { useState } from 'react';
import {firebaseInstance,authService} from '../fbase';

const Login = ({setGoRegister}) =>{
  const [userId,setUserId] = useState("");
  const [userPassword,setUserPassword] = useState("");

  const onChange = (event) =>{
    const {target:{name,value}} = event;
    if(name === "email"){
      setUserId(value)
    }else if (name === "password"){
      setUserPassword(value);
    }
  }
  const buttonClick = async (event) =>{
    const {target:{name}} = event;

    let provider ;
    if(name === "google"){
        provider = new firebaseInstance.auth.GoogleAuthProvider();
    }else if(name === "facebook"){
        provider = new firebaseInstance.auth.FacebookAuthProvider();
    }
    await authService.signInWithPopup(provider);
  }

  const onSubmit = async (event) =>{
    event.preventDefault(); 
    try{
      let data = await authService.signInWithEmailAndPassword(userId,userPassword);
      console.log(data)
    }catch(e){
      console.log("error", e.message);
    }
  }
  console.log("dd")
  return (
  <>
    <div className="test"></div>
    <form onSubmit={onSubmit}>
      <input name="email" placeholder="Email" type="text" value={userId} onChange={onChange}/>
      <input name="password" placeholder="password" type="password" value={userPassword}  onChange={onChange}/>
      <button>로그인</button>
    </form>
    <button name="google" onClick={buttonClick}>Google</button>
    <button name="facebook" onClick={buttonClick}>Facebook</button>
    <button onClick={()=>setGoRegister(true)}>Register</button>
  </>);
}

export default Login;