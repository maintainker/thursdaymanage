import {authService} from "../fbase";

// 로그인시 db에 있는지 확인 하는 함수
const checkIdAfterLogin = () =>{
  let checkId = false;
  // 검증로직 여기에
  if(!checkId){
    //파베 로그인 후 없는 아이디 이후 회원가입 페이지로 이동
  }else{
    //유저 정보를 db에서 가져오는 로직
    //페이지 이동 로직
  }
}

const registerUser =() =>{
  let checkUser = false;
  //1차로 인증에서 확인은 해주지만 2차 db에 유저정보 있는지 검증로직 
  //-> 회원가입하다가 나가버린경우를 위해서? 
  if(checkUser){
    //유저 있으면 로직
  }else{
    // 유저 없으면 간편 회원가입 
    // 이후 회원 상세 정보 입력후 가입 로직
    // 회원가입후 상세 페이지 이동로직
  }
}

const loginUser = () =>{
  //
}



export default {checkIdAfterLogin,registerUser};


