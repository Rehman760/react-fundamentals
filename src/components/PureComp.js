import React, { Component, PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Abdul Rehman"
      }
    }
    componentDidMount(){
        //note this class is extending PureComponent class of React. It avoid unneccersy re-rendering
        //this code will run only when this.state.name instance will change means object will change, Remember having a array and append a item on it will not make any change but changing array instance will effect only.
        console.log("Pure Component")
        setInterval(()=>{
            this.setState({
                name:"Abdul Rehman"
            })
        },2000)
    }
  render() {
    return (
      <div>PureComp</div>
    )
  }
}

