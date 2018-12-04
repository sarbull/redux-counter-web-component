import { html } from 'hybrids';
import store, { increment, decrement } from './redux';

// This is a factory for connecting redux store.
// It can be taken out from here and use in other elements.
const connect = (store, mapState) => ({
  get: mapState ? () => mapState(store.getState()) : () => store.getState(),
  connect: (host, key, invalidate) => store.subscribe(invalidate),
});

// Event callbacks
const onInc = ({ offset }) => store.dispatch(increment(offset));
const onDec = ({ offset }) => store.dispatch(decrement(offset));

// redux-counter definition
export default {
  count: connect(store, (state) => state.count),
  offset: 1,
  render: ({ count, offset }) => html`
    <style>:host { display: block; }</style>

    <button onclick="${onInc}">+${offset}</button>
    <button onclick="${onDec}">-${offset}</button>

    <p>Count: ${count}</p>
  `,
};