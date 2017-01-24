import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: "",
      fahrenheit: "",
    };

    this.onCelsiusChange = this.onCelsiusChange.bind(this);
    this.onFahrenheitChange = this.onFahrenheitChange.bind(this);
  }

  onCelsiusChange(evt) {
    evt.preventDefault();

    //°C to °F     Multiply by 9, then divide by 5, then add 32
    const celsius = evt.target.value,
          fahrenheit = ((celsius * 9) / 5) + 32;

    this.updateValues(celsius, fahrenheit);
  }

  onFahrenheitChange(evt) {
    evt.preventDefault();

    //°F to °C     Deduct 32, then multiply by 5, then divide by 9
    const fahrenheit = evt.target.value,
          celsius = ((fahrenheit - 32) * 5) / 9;

    this.updateValues(celsius, fahrenheit);
  }

  updateValues(celsius, fahrenheit) {
    this.setState({
      celsius: Math.round(celsius * 10) / 10,
      fahrenheit: Math.round(fahrenheit * 10) / 10,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Convert between Celsius and Fahrenheit</h1>

        <input
          type="number"
          onChange={this.onCelsiusChange}
          value={this.state.celsius}
          placeholder="°C"
        />
        <span className="fa fa-arrow-left"></span>
        to
        <span className="fa fa-arrow-right"></span>
        <input
          type="number"
          onChange={this.onFahrenheitChange}
          value={this.state.fahrenheit}
          placeholder="°F"
        />
      </div>
    );
  }
}

export default App;
