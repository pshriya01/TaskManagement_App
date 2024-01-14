import { Task_Failure, Task_Request, Task_Success } from "../actionTypes"

const init = {
   isLoading:false,
   isError:false,
   tasks:[]
}
export const reducer = (state=init,{type,payload})=>{

    switch(type){

        case Task_Request:{
            return {...state,isLoading:true}
        }
       
       case Task_Success:{
          return {...state,isLoading:false,tasks:payload}
       }

       case Task_Failure:{
         return {...state,isLoading:false,isError:true}
       }

        default:{
            return state
        }
    }
}