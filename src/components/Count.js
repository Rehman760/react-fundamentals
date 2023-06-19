import React, { Component } from 'react'

 class Count extends Component {
    constructor(){
        super()
        this.state={
            value:1
        }
    }
    Increment(){
        this.setState({
            value:this.state.value+1
        },()=>{
            console.log(this.state.value)
        })
     
    }
    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

  render() {
    return (
        <div>
            <div>Count: {this.state.value}</div>
            <button onClick={()=>this.Increment()}>Increment</button>
        </div>
    )
  }
}

export default Count