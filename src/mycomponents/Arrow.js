import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


/* function Arrow(){
    return(
        <button>My button</button>
    );
}
*/

const Alart=(a)=>{

    alert(a)
}


const Arrow=()=>{

    return(
        <button onClick={Alart.bind(this, 'I am from Arrow function')} className="btn btn-danger">My button</button>
    );
}

export default Arrow;