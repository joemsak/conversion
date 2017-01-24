import React, { Component } from 'react';

import TemperatureConverter from './TemperatureConverter';
import DistanceConverter from './DistanceConverter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TemperatureConverter />
        <DistanceConverter />
      </div>
    );
  }
}

export default App;
