import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: "",
    };

    this.onCelsiusChange = this.onCelsiusChange.bind(this);
  }

  onCelsiusChange(evt) {
    evt.preventDefault();

    this.setState({
      celsius: evt.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="number"
          onChange={this.onCelsiusChange}
          value={this.state.celsius}
        />
      </div>
    );
  }
}

export default App;
