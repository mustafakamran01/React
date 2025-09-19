import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const [counter, setCounter] = useState(8)    

  const addValue = () => {
    if(counter < 20){
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      /*
        In this scenario, it will increase the value only by 1 not by 4, because
        react follow fibre algo, in which these operations will bundled together and then go for compilation
      */

      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      /*
        In this scenario, the value will be increased by 4, because it firstly takes the previous value and then perform the operation,
        after that it goes to the next method
      */

    }
    // console.log(counter, Math.random());
    
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
 
  return (
    <>
      <h1>Counter number</h1>
      <h2>Value: {counter} </h2>
      <button
      onClick={addValue}
      >Add value {counter} </button>
      <button 
      onClick={removeValue}
      >Remove value {counter} </button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App
