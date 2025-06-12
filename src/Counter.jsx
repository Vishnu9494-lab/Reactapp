// import React from 'react'
// function Counter(){
//     var [counter,setCounter]=React.useState(0);
//     return(
//         <div className="border border-danger p-3 m-2">
//             <h1>Counter:{counter}</h1>
//             <button onClick={()=>{setCounter(counter+1)}}>Inc</button>
//             <button onClick={()=>{setCounter(counter-1)}} >Dec</button>
//         </div>
//     )
// }
// export default Counter;

import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    console.log("Counter Component Rendered");
  return (
    <div className="border border-5 border-success p-3 m-3">
        <h1>Counter:{props.counterReducer.count}</h1>
        <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
        <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>
    </div>
  )
}

export default connect((store)=>{return store})(Counter)