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
  return(
    <>
      <h1>Counter</h1>

      <h2>Value: {counter}</h2>

      <button onClick={() => {
        counter = counter + 1
        if (counter <= 20) {
          setCounter(counter)
        } else {
          counter = counter - 1
          setCounter(counter)
        }
      }}>Add Value</button>

      <br />
      <br />

      <button onClick={() => {
        counter = counter - 1
        if (counter >= 0) {
          setCounter(counter)
        } else {
          counter = counter + 1
          setCounter(counter)
        }
      }}>Remove Value</button>
    </>
  )
}

export default App
