import React, { Component } from 'react';

import ConversionForm from './ConversionForm';

class TemperatureConverter extends Component {
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
      <ConversionForm
        name="temp"

        leftInputName="°C"
        leftInputChange={this.onCelsiusChange}
        leftValue={this.state.celsius}

        rightInputName="°F"
        rightInputChange={this.onFahrenheitChange}
        rightValue={this.state.fahrenheit}
      />
    );
  }
}

export default TemperatureConverter;
