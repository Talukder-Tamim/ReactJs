import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            email:"",
            mobile:""
        }
    }

    onChangeHandler=(event)=>{
        var inputNmae = event.target.name
        var inputValue = event.target.value

        this.setState({[inputNmae]:inputValue})
    }

    render() {
        return (
            <div>
                <p>First name: {this.state.fname}</p>
                <p>Last name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile: {this.state.mobile}</p>
                <form>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile"></input><br></br>
                    <input onChange={this.onChangeHandler} name="submit" type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Signup;