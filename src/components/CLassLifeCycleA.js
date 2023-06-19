import React, { Component } from 'react'
import CLassLifeCycleB from './CLassLifeCycleB'

export default class CLassLifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Abdul Rehman"
      }
      console.log("CLassLifeCycleA Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("ClassLifeCycleA getDerivefFromProps")
        return null
    }
    componentDidMount(){
        console.log("CLassLifeCycleA componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("CLassLifeCycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("CLassLifeCycleA getSnapsShotFromUpdate")
    }

    componentDidUpdate(){
        console.log("ClassLifeCycleA componentDidUpdate")
    }
  render()
  {
    console.log("CLassLifeCycleA Render")
    return (
      <div>
        <div>
        CLassLifeCycleA
        </div>
        <CLassLifeCycleB />
      </div>
    )
  }
}
