
import './App.css'
import Header from './Header'
import Banner from './Banner'
import Courses from './Courses'
import Counter from './Counter' 
import Todolist from './Todolist'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { connect } from 'react-redux';

function App() {

  return (
    <div className='border border-danger p-3 m-2'>
      {/* <h1>welcome to react app</h1>
      <button className='btn btn-danger'>Click Me!!</button>
      <button className='btn btn-success'>Click Me!!</button>
      <button className='btn btn-info'>Click Me!!</button>
      <button className='btn btn-warning'>Click Me!!</button>
      <button className='btn btn-primary'>Click Me!!</button>
      <button className='btn btn-secondary'>Click Me!!</button>
      <button className='btn btn-light'>Click Me!!</button>
      <button className='btn btn-dark'>Click Me!!</button>
      <button className='btn btn-success text-subtle'>Click Me!!</button>
      <div className='border d-inline-block p-2 m-2 rounded bg-success-subtle text-success'>lets create a button</div> */}
      {/* <Header></Header>
      <Banner></Banner>
      <Courses></Courses> */}
      <h1>Welcome to react js </h1>
      <Counter></Counter> 
      <Todolist></Todolist>
      
       
    </div>
  )
}

export default App
