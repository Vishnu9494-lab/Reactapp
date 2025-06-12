// import React from 'react';
// function Todolist(){
//     //state
//     var [todos,setTodos] = React.useState([])
//     //action
//     function addTodo(){
//         var ntodo = document.getElementById("d1").value;
//         setTodos([...todos,ntodo])
//     }
//     function delTodo(ind){
//         var temp = [...todos];
//         temp.splice(ind,1)
//         setTodos([...temp])
//     }
//     //UI
//     return (
//         <div className='m-3 p-5 border border-danger'>
//             <input type="text" id="d1"/>
//             <button onClick={()=>{addTodo()}}>Add Todo</button>
//             <br/>
//             <ul className='p-0 list-unstyled'>
//                 {todos.length()==0 && <i>Please add Todo</i>}
//                 {
//                     todos?.map((todo,i)=>{
//                         return <li className="border border-2 p-2 my-2">
//                             {todo}
//                             <button onClick={()=>{delTodo(i)}}>Delete</button>
//                             </li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }
// export default Todolist;


import React from 'react'
import { connect } from 'react-redux';
function Todolist(props) {
    console.log("todolist component rendered");
  return (
    <div className="border border-5 border-info p-3 m-3">
        <h1>Todolist</h1>
        <input type="text" id="d1"/>
        <button onClick={()=>{props.dispatch({type:"ADDTODO",payload:document.getElementById("d1").value})}}>Add Todo</button>
        <ul>
            {
                props.todoReducer.todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </ul>
    </div>
  )
}

export default connect((store)=>{return store})(Todolist)