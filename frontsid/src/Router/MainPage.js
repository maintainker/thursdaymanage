import styled from 'styled-components';
import Login from '../components/Login';
import { useState } from 'react';
import Register from '../components/RegisterPage';

const StyledContainer = styled.div`
  width:100%;
  height:100vh;
  background:red;
  position:relative;
  `;
const StyledLoginDiv = styled.div`
  width:450px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background:white;
  padding :50px;
  box-sizing:border-box;
  min-height:400px;
`;
const MainPage = () =>{
  const [goRegister,setGoRegister] =useState(false);
  return (
  <StyledContainer>
    <StyledLoginDiv>
      {!goRegister && <Login setGoRegister={setGoRegister}/>}
      {goRegister && <Register setGoRegister={setGoRegister}/>}
    </StyledLoginDiv>
  </StyledContainer>);
}

export default MainPage