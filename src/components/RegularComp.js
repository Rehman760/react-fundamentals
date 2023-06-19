import React, { Component } from 'react'

export default class RegularComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Abdul Rehman"
      }
    }
    componentDidMount(){
        //it will re-render although value is same
        console.log("Regular Component")
        setInterval(()=>{
            this.setState({
                name:"Abdul Rehman"
            })
        },2000)
    }
  render() {
    return (
      <div>RegularComp</div>
    )
  }
}
