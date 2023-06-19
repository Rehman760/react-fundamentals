import React, { Component } from 'react'

export default class ClassClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    //   binding option 3, React doc prefer
      this.change=this.change.bind(this)
    }
    change(){
        //if we do not bind this keyword it will give error because this will be undefined. apply any binding method 
       this.setState({
        message:"GoodBye!"
       })


    }
    // binding option 4
    // change=()=>{
    //     this.setState({
    //         message:"GoodBye"
    //     })
    // }
  render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            {/* event binding option1 */}
            {/* <button onClick={this.change.bind(this)}>ClassClick</button> */}
            {/* binding option2
            <button onClick={()=>this.change()}>Class Click</button> */}
            <button onClick={this.change}>Class click</button>

        </div>
 
    )
  }
}
