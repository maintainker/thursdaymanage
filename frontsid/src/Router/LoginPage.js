import styled from 'styled-components';
import { useState } from 'react';

const StyledContainer = styled.div`
  width:100%;
  height:100vh;
  background:red;
  position:relative;
  `;
const StyledLoginForm = styled.form`
  width:400px;
  height:300px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background:white;
  padding :50px;
  box-sizing:border-box;
`;
const LoginPage = () =>{
  const [userId,setUserId] = useState("");
  const [userPassword,setUserPassword] = useState("");

  const onChange = (event) =>{
    const {target:{name,value}} = event;
    if(name === "id"){
      setUserId(value)
    }else if (name === "password"){
      setUserPassword(value);
    }
  }
  const onSubmit = (event) =>{
    event.preventDefault();
  }
  return (
  <StyledContainer>
    <StyledLoginForm onSubmit={(event)=>onSubmit(event)}>
      <input name="id" type="text" value={userId} onChange={(event)=>onChange(event)}/>
      <input name="password" type="password" value={userPassword}  onChange={(event)=>onChange(event)}/>
      <button>로그인</button>
    </StyledLoginForm>

  </StyledContainer>);
}

export default LoginPage