import React from 'react'

export default function welcome(props) {
  //destructing 
  const {name,children}=props
  return (
    <div><h1>Hello {name}</h1>
    {children}
      </div>
  )
}
