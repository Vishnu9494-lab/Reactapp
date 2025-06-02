import React from 'react'
function Counter(){
    var [counter,setCounter]=React.useState(0);
    return(
        <div className="border border-danger p-3 m-2">
            <h1>Counter:{counter}</h1>
            <button onClick={()=>{setCounter(counter+1)}}>Inc</button>
            <button onClick={()=>{setCounter(counter-1)}} >Dec</button>
        </div>
    )
}
export default Counter;