import React, { Component } from 'react';

import TemperatureConverter from './TemperatureConverter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TemperatureConverter />
      </div>
    );
  }
}

export default App;
