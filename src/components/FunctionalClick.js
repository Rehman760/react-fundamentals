import React from 'react'

export default function FunctionalClick() {
    function change(){
        console.log("Button has CLicked")
    }
  return (
    <button onClick={change}>Click</button>
  )
}
