import axios from "axios";
import { Login_Failure, Login_Request, Login_Success } from "../actionTypes";

const baseURL = "http://localhost:8080";

//Login
export const login = (user)=> async (dispatch) => {
  try {
    dispatch({type:Login_Request})
    try {
      const res = await axios.post(`${baseURL}/users/login`,user);
      console.log(res.data)
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