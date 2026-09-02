import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() { 
   
 let [counter , setCounter] = useState(0) 

const limit = 5
const substractlimit = 0


  const increasevalue = () => {
    if(counter < limit){
   setCounter(counter + 1)
    }
 }
  const decreasevalue = () => {

  if (counter > substractlimit){
     setCounter(counter - 1)
  }
 }

  return (
    <>
     <h1>water and code </h1>
     <h2>counter value : {counter}</h2>

     <button onClick={increasevalue}>Add value</button>
     <br />
     <button onClick={decreasevalue}> Substract value</button>
    </>
  )
}

export default App
