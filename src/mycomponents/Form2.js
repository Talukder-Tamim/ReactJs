import React, { Component } from 'react';

class Form2 extends Component {
     
    constructor(){
        super()
        this.state={
            username: ""
        }
    }

    onChangeHandler=(event)=>{
        var myname = event.target.name
        var myvalue = event.target.value
        this.setState({[myname]:myvalue})
    }

    onSubmitHandler=()=>{
        alert(this.state.username)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                     <p>My First Form</p>
                     <p>{this.state.username}</p>
                     <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your name"></input><br></br>
                     <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Form2;