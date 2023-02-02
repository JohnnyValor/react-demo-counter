// action creator, returns an action with the 'INCREMENT' type.
// dispatched to redux store to increase the state value.
export const increment = () => ({
  type: 'INCREMENT'
});

// action creator, returns an action with the 'DECREMENT' type.
// dispatched to redux store to decrease the state value.
export const decrement = () => ({
  type: 'DECREMENT'
});

// action creator, returns an action with the 'RESET' type.
// dispatched to redux store to reset the state value.
export const reset = () => ({
  type: 'RESET'
});

// action creator, takes in a 'number' argument and returns an action with the 'ANYTHING' type and the passed 'number' value.
// dispatched to the redux store to update the state with the provided 'number' value.
export const anything = (number) => ({
  type: 'ANYTHING', 
  number
});
