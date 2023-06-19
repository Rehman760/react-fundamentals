import React from 'react'

//fragments prevent to add unneccersy node(outer) node on DOM
export default function Fragment() {
  return (
//   <div>
//     <h1>Fragment</h1>
//     <p>this is for demo</p>
//   </div>
//above code will add div>h1 and p tags into the DOM
<React.Fragment>
    <h1>Fragment</h1>
    <p>This is demo</p>
</React.Fragment>
//now this React.Fragment code will only add h1,and p tag into DOM
  )
}
