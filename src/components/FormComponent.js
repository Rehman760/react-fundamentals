import React, { Component } from 'react'

export default class FormComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       skill:"",
    }

  }
  changeNameValue=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  changeSkillValue=(event)=>{
    this.setState({
      skill:event.target.value
    })

  }
  onSubmitClick=(event)=>{
    alert(`name is ${this.state.name} and SKill is ${this.state.skill}`)
    event.preventDefault()
  }

  render() {
    let {name,skill}=this.state
    return (
     <form onSubmit={this.onSubmitClick}>
      <label><b>Name</b></label>
      <input type="text" value={name} onChange={this.changeNameValue} />
      <br />
      <label><b> Skill</b></label>
      <select value={skill} onChange={this.changeSkillValue}>
        <option value='angular' >Angular</option>
        <option value='vue'>Vue</option>
        <option  value='react' >React</option>
      </select><br />
      <button type='submit' >Submit</button>
     </form>
    )
  }
}
