import { Login_Failure, Login_Request, Login_Success, Logout_Success } from "../actionTypes";

const init = {
    isLoading:false,
    isError:false,
    isAuth:false,
    token:null,
    user:{}
}


export const reducer = (state=init,{type,payload}) => {
    switch(type){
            case Login_Request:{
                return {...state,isLoading:true}
            }
        case Login_Success:{
            return {...state,isLoading:false,isAuth:true,token:payload.token,user:payload.user}
        }
        case Login_Failure:{
            return {...state,isError:true}
        }
        case Logout_Success:{
            return {...state,isAuth:false,token:null,user:{}}
        }
        default:{
            return state
        }
    }
  };