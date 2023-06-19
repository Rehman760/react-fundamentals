import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor() {
      super()
    
      this.state = {
         parentName:"Parent"
      
        }
        this.greet=this.greet.bind(this)
    }
    greet(){
        alert(`Hello ${this.state.parentName}`)
    }
  render() {
    return (
      <ChildComponent greetHandle={this.greet}/>

    )
  }
}
