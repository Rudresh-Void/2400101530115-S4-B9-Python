import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const name = "Infinity"
  let x=10
  let y=20
  const p=10
  const q=25
  var r=10
  var s=23

  function fun()
{
  return "Rudresh"
}
function clac(a,b)
{
  return a+b;
}

function apple()
{
  alert("You clicked on Apple")
}

function banana()
{
  alert("You clicked on Banana")
}

  return (
    <div>
      <h1>Welcome in new project.</h1>
      <button onClick={apple}>Apple</button>
      <button onClick={banana}>Banana</button>

      <h1>Secret Project</h1>
      <h3>The value of variable is {name}</h3>
      <h3>By using Let {x+y}</h3>
      <h3>By using const {p+q}</h3>
      <h3>By using Var {r+s}</h3>
      <h3>Name is {fun()}</h3>
      <h3>The value {clac(87,90)}</h3>
    </div>
  )
}

export default App
