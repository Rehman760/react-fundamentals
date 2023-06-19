import React, { Component } from "react";

class Show extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome To my Channel'
        }
        
    }
    change=()=>{
        this.setState({
            message:"Thank You for Subcribe"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.change()}>Subscribe</button>
            </div>
        )
    }
}
export default Show