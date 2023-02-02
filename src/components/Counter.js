import React from 'react';


// displays a counter and its increment, decrement and reset buttons.
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
