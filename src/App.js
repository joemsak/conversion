import React, { Component } from 'react';

import TemperatureConverter from './TemperatureConverter';
import DistanceConverter from './DistanceConverter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Unit Conversions</h1>

        <h2>Celcius to Fahrenheit</h2>
        <TemperatureConverter />

        <h2>Miles to Kilometers</h2>
        <DistanceConverter />
      </div>
    );
  }
}

export default App;
