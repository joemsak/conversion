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

    this.setState({
      celsius: evt.target.value,
    });
  }

  onFahrenheitChange(evt) {
    evt.preventDefault();

    this.setState({
      fahrenheit: evt.target.value,
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
