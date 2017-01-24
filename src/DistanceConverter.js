import React, { Component } from 'react';

class DistanceConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      miles: "",
      kilometers: "",
    };

    this.onMilesChange = this.onMilesChange.bind(this);
    this.onKilometersChange = this.onKilometersChange.bind(this);
  }

  onMilesChange(evt) {
    evt.preventDefault();

    //1 mile is equal to 1.609344 kilometers
    const miles = evt.target.value,
          kilometers = miles * 1.609344;

    this.updateValues(miles, kilometers);
  }

  onKilometersChange(evt) {
    evt.preventDefault();

    //1 kilometer is equal to 0.62137119 miles
    const kilometers = evt.target.value,
          miles = kilometers * 0.62137119;

    this.updateValues(miles, kilometers);
  }

  updateValues(miles, kilometers) {
    this.setState({
      miles: Math.round(miles * 10) / 10,
      kilometers: Math.round(kilometers * 10) / 10,
    });
  }

  render() {
    return (
      <div className="distance-converter">
        <h1>Convert between Miles and Kilometers</h1>

        <input
          type="number"
          onChange={this.onMilesChange}
          value={this.state.miles}
          placeholder="mi"
        />

        <span className="fa fa-arrow-left"></span>

        to

        <span className="fa fa-arrow-right"></span>

        <input
          type="number"
          onChange={this.onKilometersChange}
          value={this.state.kilometers}
          placeholder="km"
        />
      </div>
    );
  }
}

export default DistanceConverter;
