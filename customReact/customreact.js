function customElements(element, container) {
    /*const domElement = document.createElement(element.type)
    domElement.innerHTML = element.Children
    domElement.setAttribute('href', element.props.href)
    domElement.setAttribute('target', element.props.target)

    container.appendChild(domElement)*/

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.Children

    for (const prop in element.props) {
        if (prop === 'children') continue;

        domElement.setAttribute(prop, element.props[prop])
    }
    container.appendChild(domElement)
}

const reactELement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root')

customElements(reactELement, mainContainer);
/* Here, reactElement is the element which which need to be created and render into the given container (mainContainer) */







