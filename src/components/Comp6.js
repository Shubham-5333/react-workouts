import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state,action)=>{
    switch(action){
        case "increment":
            return state+1
        case "decrement" :
            return state-1   
        case "reset" :
            return initialState
        default :
            return state
    }
}
function Comp6() {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (

    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch("increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>decrement</button>
      <button onClick={()=>dispatch("reset")}>reset</button>
    </div>
  )
}

export default Comp6

