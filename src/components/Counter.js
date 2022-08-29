import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, clicks, addAmount, onReset, onAnything }) => {
  return (
    <div>
      <div>
        <button onClick={() => { onDecrement(); }}>-</button>
        <span>{count}</span>
        <button onClick={() => { onIncrement(); }}>+</button>
        <br />
        <h3>Times the increment/decrement buttons have been clicked:<span> {clicks}</span></h3>
        <input type="number" onChange={event => onAnything(event.target.value)} />
        <button onClick={() => onReset(addAmount) }>Change Count Number</button>
      </div>
    </div>
  );
}


export default Counter;

// button for reset
// <button onClick={this.reset.bind(this)}>Change Count Number</button>
// button attempt 2
// <button onClick={event => setState({ count: state.count + state.addAmount})}>Change Count Number</button>