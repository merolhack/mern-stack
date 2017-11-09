import React, { Component } from 'react';
import './App.css';

import { subscribeToCurrentTurn } from './api';

class App extends Component {
  state = {
    currentTurn: null
  };

  constructor(props) {
    super(props);
    subscribeToCurrentTurn((err, currentTurn) => this.setState({ 
      currentTurn 
    }));
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
