// const { Children } = require("react");

function customReact(reactElement, mainContainer){
    /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    mainContainer.appendChild(domElement) */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children

    for (const key in reactElement.props) {
        if(key === 'children') continue

        domElement.setAttribute(key, reactElement.props[key])
    }

    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },

    Children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customReact(reactElement, mainContainer)