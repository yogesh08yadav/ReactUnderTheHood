// const header = React.createElement('h1', {id:'heading'}, 'Hello World')
// console.log(header) // gives a object with type as h1 and props as children and attributes
// const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(root)
// After getting header as object it is passed to render. Render takes the object and converts it into 
// the html element and shows on browser
// root.render(header)

// We can also create nested html structure using React.createElement
//  for eg - create this - <div class=parent> <div class=child > <h1>I am h1 tag
// What if we have multiple siblings under an element ?

const nestedElem = React.createElement('div',{class:'parent'},React.createElement('div',{class:'child'},
 [React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')]))
console.log('nestedElem', nestedElem)
const root = ReactDOM.createRoot(document.getElementById('root'))
// What if there is something in root tag? It will be replaced by the element we are rendering
root.render(nestedElem)

// React is called a library as it can be applied to a small portion of our code also, like we can apply react
//  only to our header. React can be applied to any framework by just giving cdn link and render the element we need
