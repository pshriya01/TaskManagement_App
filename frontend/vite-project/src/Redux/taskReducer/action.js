import axios from "axios"
import { Add_Task, Delete_Task, Edit_Task, Task_Failure, Task_Request, Task_Success } from "../actionTypes"

const baseURL = "http://localhost:8080";

export const getTasks = (token)=>async(dispatch)=>{
  try{
    dispatch({type:Task_Request})
    try{
        const res = await axios.get(`${baseURL}/tasks/get`, {
            headers: {
              Authorization: token,
              },
          });
    
          console.log(res.data);
    
          dispatch({ type: Task_Success, payload: res.data });
    }
    catch (error) {
        dispatch({type:Task_Failure})
      }
  }
  catch (error) {
    console.log(error)
  }
}

export const adaddTask = (task,token)=>async(dispatch)=>{
    try{
        dispatch({type:Task_Request})
        try{
            const res = await axios.post('http://localhost:8080/tasks/create', task, {
                headers: {
                  'Authorization': token
                }
              })
              console.log(res?.data)
              dispatch({type:Add_Task,payload:res.data})
              return res?.data
        }
        catch (error) {
            dispatch({type:Task_Failure})
          }
    }
    catch (error) {
        console.log(error)
      }
   
}

export const deleteTask= (id,token)=>async(dispatch)=>{
  
   try{
    dispatch({type:Task_Request})
    try{
      const res = await axios.delete(`http://localhost:8080/tasks/delete/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      console.log(res?.data)
      dispatch({type:Delete_Task,payload:res.data})
      return res?.data
    }
    catch (error) {
      dispatch({type:Task_Failure})
    }
   }
   catch(err){
    console.log(err)
   }
}

export const editTask = (task,token,id) => async(dispatch)=>{
  try{
    dispatch({type:Task_Request})
    try{
      console.log(id,"id")
      const res = await axios.patch(`http://localhost:8080/tasks/update/${id}`,task, {
        headers: {
          'Authorization': token
        }
      })
      // console.log(res)
      console.log(res.data)
      dispatch({type:Edit_Task,payload:res.data})
      

      return res?.data
    }
    catch (error) {
      dispatch({type:Task_Failure})
    }
   }
   catch(err){
    console.log(err)
   }
}
  


 

