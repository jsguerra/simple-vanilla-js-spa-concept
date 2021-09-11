'use strict'

// DOM Elements
const elements = {
  mainContent: document.getElementById('app'),
  inputField: document.getElementById('name'),
  setContent: document.getElementById('set'),
  navButtons: document.querySelectorAll('.nav-main button')
}
console.log(Array.from(elements.navButtons))

// Templates
const templates = {
  home: `
    <h1>Hello Index</h1>
    <p>This is my index template, pretty cool</p>
  `,
  about: `
    <h1>About This Template</h1>
    <p>A quick way to see if this is rendering on click.</p>
  `
}

// Add event listener to change page content
document.addEventListener('DOMContentLoaded', () => {
  elements.mainContent.innerHTML = templates.home
})

set.addEventListener('click', (e) => {
  e.preventDefault()

  elements.mainContent.textContent = elements.inputField.value
})

Array.from(elements.navButtons).map(navButton => {
  navButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.textContent === 'Home') {
      elements.mainContent.innerHTML = templates.home
    } else if (e.target.textContent === 'About') {
      elements.mainContent.innerHTML = templates.about
    }
  })
})