import React from 'react'

export default function ListRendering() {
    const persons=["Ali","Ahmed","Aqeel"]
    const names=persons.map((name,index)=><h1 key={index}> My name is {name}</h1>)
  return (
    <div>{names}</div>
  )
}
