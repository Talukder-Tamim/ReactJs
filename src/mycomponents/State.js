import React,{Component} from 'react'


class State extends Component{

    constructor(){
        super()

        this.state={
            name: "Tamim",
            age: [25, 26, 27],
            height:{
                cm: "171cm",
                inch: "5.7ft"
            }
        }
    }

    render(){
    return <div>
        <h1>Name: {this.state.name}</h1>
        <h1>Age: {this.state.age[2]}</h1>
        <h1>Height: {this.state.height.cm}</h1>
    </div>

    }
}

export default State;