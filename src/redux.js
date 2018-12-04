import { createStore } from 'redux';

// Reducer inspired by official example from the redux repository:
// https://github.com/reduxjs/redux/blob/master/examples/counter
const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.value };
    case 'DECREMENT':
      return { ...state, count: state.count - action.value };
    default:
      return state;
  };
}

// Store instance as default export
export default createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // redux dev tools
);

// Action creators as name exports

export const increment = (value = 1) => ({
  type: 'INCREMENT',
  value,
});

export const decrement = (value = 1) => ({
  type: 'DECREMENT',
  value,
});