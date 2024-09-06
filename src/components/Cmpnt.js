import React, { useReducer } from 'react'
// import {ChannelContext, UserContext} from '../App'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }
}

const Cmpnt = () => {
    const [count,dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={()=>dispatch("increment")}>Increment</button>
            <button onClick={()=>dispatch("decrement")}>decrement</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </div>
    )
}
export default Cmpnt
