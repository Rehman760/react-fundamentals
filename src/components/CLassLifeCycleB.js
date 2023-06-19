import React, { Component } from 'react'

export default class CLassLifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Abdul Rehman"
      }
      console.log("CLassLifeCycleB Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("ClassLifeCycleB getDerivefFromProps")
        return null
    }
    componentDidMount(){
        console.log("CLassLifeCycleB componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("CLassLifeCycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("CLassLifeCycleB getSnapsShotFromUpdate")
    }

    componentDidUpdate(){
        console.log("ClassLifeCycleB componentDidUpdate")
    }
  render()
  {
    console.log("CLassLifeCycleB Render")
    return (
      <div>CLassLifeCycleB</div>
    )
  }
}
