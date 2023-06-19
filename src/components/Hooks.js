import React,{useState} from 'react'

function Hooks() {
    const[ count,setCount]=useState(3)
  function decrement(){
    setCount((prev)=> prev-1)
    console.log(count)
  }
  function increment(){
    setCount((prev)=> prev+1)
  }
    return (
    <div>
        <button onClick={decrement}>-</button>
        <span>the Number: {count}</span>
        <button onClick={increment}>+</button>

    </div>
  )
}

export default Hooks