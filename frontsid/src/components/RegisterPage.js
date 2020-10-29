import styled from 'styled-components';
import {regiValidation,registerUser} from "../requesters/userCheck"
import { useState } from 'react';

const StyledInputDiv = styled.div`
  margin:20px;
  span{
    padding-left:2px;
    display:block;
    height:15px;
    font-size:14px;
  }
  input{
    border: #ccc solid 1px;
    padding: 10px;
    height: 23px;
    width: 92%;
    margin-top:5px;
  }
`;
const StyledRegisterBtn = styled.button`
  width: calc(100% - 44px);
  border: 0;
  margin: 20px;
  background: #ccc;
  height:50px;
  font-size:18px;
  cursor:pointer;
`;

const Register = ({setGoRegister}) =>{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordCh,setPasswordCh] = useState("");
  const [name,setName] = useState("");
  const [shop,setShop] = useState("");
  const [phone,setPhone] = useState("");

  const onChange = (event)=>{
    const {target:{value,name}}=event;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordCh":
        setPasswordCh(value);
        break;
      case "name":
        setName(value);
        break;
      case "shop":
        setShop(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  }

  const onClickRegi = () =>{
    const validEmail = regiValidation("email",email);
    const validPassword = regiValidation("password",password);
    console.log(validEmail,validPassword)
    if(validEmail && validPassword){
      const user = {
        email,password,name,shop,phone
      }
      registerUser(user)
    }
  }
  
  return (
  <>
    <StyledInputDiv>
      <span>이메일</span>
      <input name="email" value={email} onChange={onChange}/>
    </StyledInputDiv>
    <StyledInputDiv>
      <span>비밀번호</span>
      <input name="password" value={password} onChange={onChange} />
    </StyledInputDiv>
    <StyledInputDiv>
      <span>비밀번호확인</span>
      <input name="passwordCh" value={passwordCh} onChange={onChange} />
    </StyledInputDiv>
    <StyledInputDiv>
      <span>이름</span>
      <input name="name" value={name} onChange={onChange} />
    </StyledInputDiv>
    <StyledInputDiv>
      <span>회사/가게 이름</span>
      <input name="shop" value={shop} onChange={onChange} />
    </StyledInputDiv>
    <StyledInputDiv>
      <span>연락처(-없이 입력해주세요)</span>
      <input name="phone" value={phone} onChange={onChange} />
    </StyledInputDiv>
    <StyledRegisterBtn onClick={onClickRegi}>회원가입</StyledRegisterBtn>
  </>);
}

export default Register;