import React,{Component} from 'react'


class SetState extends Component{
    constructor(){
        super()

        this.state={
            name: "Tamim"
        }
    }

    changeName(a){
        this.setState({name: a})
    }

    render(){
        return <div>
            <h1>Name: {this.state.name}</h1>
            <button className="btn btn-primary" onClick={this.changeName.bind(this, 'Talukder')}>Change Name</button>
        </div>
    }
}

export default SetState