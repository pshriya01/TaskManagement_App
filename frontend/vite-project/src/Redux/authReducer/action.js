import axios from "axios";
import { Login_Failure, Login_Request, Login_Success, Logout_Success } from "../actionTypes";

const baseURL = "https://eager-red-chick.cyclic.app";

//Login
export const login = (user)=> async (dispatch) => {
  try {
    dispatch({type:Login_Request})
    try {
      const res = await axios.post(`${baseURL}/users/login`,user);
      // console.log(res.data)
      dispatch({type:Login_Success, payload:res?.data})

      return res?.data;
    } catch (error) {
      dispatch({type:Login_Failure})
    }
  } catch (error) {
    console.log(error)
  }
}

export const register = (user) => async(dispatch) =>{
    try{
        dispatch({type:Login_Request})
        try{
            const res = await axios.post(`${baseURL}/users/register`,user)
            return res?.data;
        }
        catch (error) {
            dispatch({type:Login_Failure})
        }
    }
    catch(error){
        console.log(error)
    }
}

export const logout = (token)=> async(dispatch)=>{
  try{
     const res = await axios.get(`${baseURL}/users/logout`,{
      headers: {
        Authorization: token,
        }
     })
     console.log(res.data)
     dispatch({type:Logout_Success})
     return res.data

  }
  catch (error) {
    console.log(error)
  }
}