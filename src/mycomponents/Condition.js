import React,{Component} from 'react'


class Condition extends Component{
    constructor(){
        super()
        this.state={
            login: false
        }
    }

    render(){
        if(this.state.login==true){
            return <button>Logout</button>
        }
        else{
            return <button>Login</button>
        }
    }
}

export default Condition;