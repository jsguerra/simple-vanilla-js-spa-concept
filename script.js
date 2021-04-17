const state = {}

const display = document.getElementById('display')
const nameInput = document.getElementById('name')
const set = document.getElementById('set')

Object.defineProperty(state, "name", {
  set:(val) => {
    display.textContent = val
  }
})

nameInput.addEventListener('keyup', function() {
  state.name = this.value
})