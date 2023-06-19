import React from 'react'

function MemoComponent() {
  return (
    <div>
        MemoComponentReact
    </div>
  )
}

export default React.Memo(MemoComponent)//this is similar to the pure component(pure component is only used for class component, memo component used for functional component)
