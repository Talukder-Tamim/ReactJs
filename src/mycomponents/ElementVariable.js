import React,{Component} from 'react'


class ElementVariable extends Component{
    constructor(){
        super()
        this.state={
            login: false
        }

    }

    render(){
        return(
            this.state.login?(
                <h1>I am first</h1>
            ) 
            :
            (
                <h1>I am second</h1>
            ) 
        )
    }
}

export default ElementVariable;