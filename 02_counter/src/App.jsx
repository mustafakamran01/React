import { useState } from 'react'
import './App.css'

function App() { 
  
  let [counter, setCounter] = useState(10);
  /*
    Here,
      useState(10) => We are giving initial value of counter i.e, 10
      counter => It is the variable whose initial value is 10
      setCounter => It is a function which change the value of counter
  */
  /* 
    useState is used to reflect the changes in UI.
    useState is used to store and manage data (state) inside a functional component. 
    When the state changes, React re-renders the component, and 
    the UI automatically updates to reflect those changes. 
  */

  // let value = 10

  const addValue = () => {
    // counter = counter + 1

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    /* 
      Here the value is increased by 1 only, despite of calling setCounter 4 times, because
      here all the setCounter is performing the same task(increasing counter by 1), so
      all the setCounter send to backend as a batch and only execute one time
    */

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    /*
      Here what happen is, useState accept a callback and in return it will give the previous counterValue, and
      what will happen is, it will first increase the value then it will move to second setCounter, 
      so in every click, the value will be increased by 4
    */
  }

  const removeValue = () => {
    // counter = counter - 1
    // setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)
    // setCounter(counter - 1)

    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
  }

  return(
    <>
      <h1>Counter</h1>

      <h2>Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <br />
      <br />

      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
