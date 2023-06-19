import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         login:true
      }
    }
  render() {
    //Approach1 if/else
    // if(this.state.login){
    //     return<div>Hello Abdul Rehman</div>
    // }
    // else{
    //     return<div>Hello Guest</div>
    // }


    //Approach2 Element Variable
    // let user
    // if(this.state.login){
    //     user=<div>Hello Abdul Rehman</div>
    // }
    // else{
    //     user=<div>Hello Guest</div>
    // }
    // return <div>{user}</div>


    //Approach 3 (Ternary operator)
    // return this.state.login ?
    // <div>Hello Abdul Rehman</div>:
    // <div>Hello Guest</div>


    //Approach 4 (Short Circuit Operator(either something or nothing))
    // return this.state.login && <div>Hello Abdul Rehman</div>

    return (
      <div>ConditionalRendering</div>
    )
  }
}

