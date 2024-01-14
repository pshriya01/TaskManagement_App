const init = {
   isLoading,
   isError,
   tasks:[]
}
export const reducer = (state=init,{type,payload})=>{

    switch(type){

        case Task_Request:{
            return {...state,isLoading:true}
        }

        default:{
            return state
        }
    }
}