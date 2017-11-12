import React, { Component } from 'react';
import './App.css';

import { getCurrentTurn, subscribeToCurrentTurn } from './api';

class App extends Component {
  state = {
    currentTurn: 0
  };

  constructor(props) {
    super(props);

    getCurrentTurn((payload) => {
      this.setState({
        currentTurn: payload.counter,
      });
    });

    subscribeToCurrentTurn((err, payload) => {
      console.log('currentTurn:', payload);
      this.setState({
        currentTurn: payload.counter,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
        Turno actual: {this.state.currentTurn}
        </p>
      </div>
    );
  }
}

export default App;
