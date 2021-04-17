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