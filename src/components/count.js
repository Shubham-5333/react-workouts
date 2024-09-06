import React, { useState } from 'react'
// import App from '../App'

const Count = ({sentToParent}) => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}


export default Count
