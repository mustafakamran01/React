import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  const username = 'Mustafa Kamran'       
  return(
    <h1>My application is created by {username} </h1>     // this username is called evaluated expression
  )
}

// const reactElement = {                        // this is not allowed in react, because the key names are different in react
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },

//     Children: 'Click me to visit google'
// }


const anotherElement = <a href='https://google.com' target='_blank'>Visit to google</a>

const reactElement = React.createElement(       // this is how a tree structure is accepted in react
  'a', 
  {href: 'https://google.com', target: '_blank'},
  'Visit google'
)

function ConclusionVideo4(){
  return(
    <>
      <h1>Conclusion</h1>
      <p>We can create our own custom react</p>
      <p>We can directly render our function in main.jsx</p>
      <p>We cannot directly render our own custom react element, because the key names are different in react</p>
      <p>Variables that are enjected in function are called evaluated expression</p>
      <p>We can render our element but only in form of HTML</p>
      <p>We understand that how we can render our react element according to the react</p>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ConclusionVideo4 />
  
)





  