/*
 * Actions
 * */

var addToCounterElement = document.getElementById('add')
addToCounterElement.addEventListener('click', function () {
  store.dispatch({ type: 'ADD' })
})

var subtractFromCounterElement = document.getElementById('subtract')
subtractFromCounterElement.addEventListener('click', function () {
  store.dispatch({ type: 'SUBTRACT' })
})

var resetCounterElement = document.getElementById('reset')
resetCounterElement.addEventListener('click', function () {
  store.dispatch({ type: 'RESET' })
})


/*
 * Reducer
 * */

function counter(state, action) {
  if (typeof state === 'undefined') {
    return {
      count: 0
    }
  }

  var nextState = {
    count: state.count
  }

  switch (action.type) {
    case 'ADD':
      nextState.count = state.count + 1
      return nextState
      break;
    case 'SUBTRACT':
      nextState.count = state.count - 1
      return nextState
      break;
    case 'RESET':
      nextState.count = 0
      return nextState
      break;
    default:
      return state
  }
}


/*
 * State
 * */

var store = Redux.createStore(counter)
var counterElement = document.getElementById('counter')

function render() {
  var state = store.getState()
  counterElement.innerHTML = state.count.toString()
}

store.subscribe(render)
render()