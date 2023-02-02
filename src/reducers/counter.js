// set initial state
const initialState = {
  count: 0,
  clicks: 0,
  addAmount: 0
};

// switch statement that handles four possible actions below. If none match, return original state.
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
    case 'RESET':
      return {
        ...state,
        count: (state.count = parseInt(state.addAmount)),
        clicks: state.clicks = 0,
        // addAmount: state.addAmount = 0
      }
    case 'ANYTHING':
      return {
        ...state,
        addAmount: action.number
      }
    default:
      return state;
  }
}

export default counterReducer;
