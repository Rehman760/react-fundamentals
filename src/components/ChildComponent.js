import React from 'react'

export default function ChildComponent(props) {
  return (
   <button onClick={()=>props.greetHandle()}>ChildComponent</button>
  )
}
