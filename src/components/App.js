import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, reset, anything } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
        count={this.props.count} 
        onAnything={this.props.onAnything} 
        onIncrement={this.props.onIncrement} 
        onDecrement={this.props.onDecrement} 
        clicks={this.props.clicks} 
        addAmount={this.props.addAmount} 
        onReset={this.props.onReset} />
      </div>
    );
  }
}

// maps dispatch actions to props, takes in dispatch function from redux store, returns object with four functions below.
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onReset: () => dispatch(reset()),
    onAnything: (number) => dispatch(anything(number))
  };
}

// maps state values from the redux store to props. takes in the global state object from the store as argument.
// returns object with three values below
function mapStateToProps(state) {
    return {
      count: state.count,
      clicks: state.clicks,
      addAmount: state.addAmount
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
