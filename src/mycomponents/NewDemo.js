import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class NewDemo extends Component {


    myFun(){

        var container = document.getElementById("myID")
        var element = <h1>I am from ReactDOM</h1>
        var callback=function(){
            alert("Hi I am from callback")
        }

        ReactDOM.render(element, container, callback)
    }


    render() {
        return (
            <div>
                <button onClick={this.myFun} className="btn btn-primary">Change</button>
                <h1 id="myID">My name is Tamim</h1>
            </div>
        );
    }
}

export default NewDemo;