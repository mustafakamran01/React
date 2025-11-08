import React from 'react'
import ReactDOM from 'react-dom/client'
import User from './App.jsx'

function MyApp() {
  return(
    <>
      <h2>I am learning React</h2>
    </>
  )
}
/* We can create components in main class also */ 

function Conclusion() {
  return(
    <>
      <h1>Conclusion</h1>
      <p>We can create our own custom react</p>
      <p>We can directly render our function in main.jsx</p>
      <p>We cannot directly render our own custom react element, because the key names are different in react</p>
      <p>Variables that are enjected in function are called evaluated expression, 
        and we write end result only.
        We cannot write if-else, for-loop, inside evaluated expression
      </p>
      <p>We can render our element but only in form of HTML</p>
      <p>We understand that how we can render our react element according to the react</p>
    </>
  )
}

// const reactELement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: "Click me to visit google"
// }
/* This code will not run because the name of key may not match with the key what react expect */

const username = "Kamran"

const reactELement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  "Click me to visit google",
  username
)
/* This is how we create our reactElement with the help of React.createElement */

const anotherElement = <a href="https://google.com" target='_blank'>Visit to google</a>
/* But here we are directly giving the HTML element, so this will work */


ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <anotherElement />
  /* This will not work because anotherElement is not a component, it's a variable that holds HTML element */
  
  <>
    {reactELement}
    <Conclusion />
    <User />
  </>
  /* 
    This is how we can render multiple component 
    Here, we need to wrap reactElement varibale into {}, 
    beacuse reactElement is a variable and we need to wrap variables into {}, when we inject it into HTMl
  */
  
)





  