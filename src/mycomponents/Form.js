import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()
        this.state={
            name: ""
        }
    }

    onChangeHandler=(event)=>{
        var newName = event.target.value
        this.setState({name: newName})
    }

    render() {
        return (
            <div>
                <p>My First Form</p>
                <p>{this.state.name}</p>
                <input onChange={this.onChangeHandler} type="text" placeholder="Your name"></input><br></br>
                <input type="submit" value="submit"></input>
            </div>
        );
    }
}

export default Form;