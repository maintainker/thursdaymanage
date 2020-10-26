import {authService,firebaseInstance,dbService} from "../fbase";

// 로그인시 db에 있는지 확인 하는 함수
const checkIdAfterLogin = (displayName,email,photoURL,uid) =>{
  let checkUser = false;
  

  return checkUser;
}

const registerUser = async(user) =>{

  try{
    await authService.createUserWithEmailAndPassword(user.email,user.password)
    .then((res)=>{
      const {user:{uid}}= res;
      return uid;
    }).then((uid)=>{
      user.uid = uid;
      dbService.collection(`management/user/${uid}/`).add(user)
    });
  }catch(e){
    console.log(e.message)
  }
}

const loginUser = async(loginType) =>{
  
  let provider ;
  if(loginType === "google"){
      provider = new firebaseInstance.auth.GoogleAuthProvider();
  }else if(loginType === "facebook"){
      provider = new firebaseInstance.auth.FacebookAuthProvider();
  }
  await authService.signInWithPopup(provider).then(res=>console.log(res))
}
const regiValidation =(type,value) =>{

  let valCh = true;
  switch (type) {
    case "email":
      const atIdx = value.indexOf("@");
      const dotIdx = value.indexOf(".");
      if( atIdx <= 0 || dotIdx <=0 || atIdx>dotIdx || dotIdx === value.length-1){
        valCh = false;
      }
      return valCh;
  
    case "password":
      const reg = /^[A-Za-z0-9]{6,12}$/;
      if(!reg.test(value)){
        valCh = false;
      }
      return valCh;

    // case value:
  
    //   break;
    default:

      return false;
  }
}


export {loginUser,checkIdAfterLogin,registerUser,regiValidation};


