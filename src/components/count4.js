
import React from 'react'

function Count4({onSend}) {
    const data = "this is from child"
    const handleSubmit = ()=>{
        onSend(data)
    }
  return (
    <div>
      <h1>child Component</h1>
      <button onClick={handleSubmit}>click</button>
    </div>
  )
}
export default Count4
