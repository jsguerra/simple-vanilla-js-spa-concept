// Set initial state to an empty oboject
const state = {}

// Setup variables for the frontend
const display = document.getElementById('display')
const nameInput = document.getElementById('name')
const set = document.getElementById('set')

// Add event listener to change the state property on click
set.addEventListener('click', () => {
  state.name = nameInput.value
  console.log(state.name);
  display.textContent = state.name
})

const homeLink = document.querySelector('#home')
const aboutLink = document.querySelector('#about')

const indexTemplate = `
  <h1>Hello Index</h1>
  <p>This is my index template, pretty cool</p>
`

const aboutTemplate = `
  <h1>About This Template</h1>
  <p>A quick way to see if this is rendering on click.</p>
`

homeLink.addEventListener('click', (e)=> {
  e.preventDefault()

  display.innerHTML = indexTemplate
})

aboutLink.addEventListener('click', (e)=> {
  e.preventDefault()

  display.innerHTML = aboutTemplate
})