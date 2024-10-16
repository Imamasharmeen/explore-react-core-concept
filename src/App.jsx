import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert('Button Clicked')

  }
  const handleClick2 = () =>{
    alert('Button 2 clicked')
  }
  const addToFive = (num) =>{
    alert(num+5);
  }
  return (
    <>
      
      <h2>React core concepts 2</h2>
      <button onClick={handleClick}>click 1</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick = {()=>{alert('third clicked')}}>click 3</button>
      <button onClick = {()=>addToFive(3)}>click 4</button>
    </>
  )
}

export default App
