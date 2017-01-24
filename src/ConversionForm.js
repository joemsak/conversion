import React, { Component } from 'react';

class ConversionForm extends Component {
  render() {
    return (
      <div className={`${this.props.name}-converter`}>
        <div className="form-inline">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">{this.props.leftInputName}</div>

              <input
                className="form-control"
                type="number"
                onChange={this.props.leftInputChange}
                value={this.props.leftValue}
              />

              <div className="input-group-addon">
                <span className="fa fa-arrow-right"></span>
              </div>
            </div>

            <div className="input-group">
              <div className="input-group-addon">
                <span className="fa fa-arrow-left"></span>
              </div>

              <input
                className="form-control"
                type="number"
                onChange={this.props.rightInputChange}
                value={this.props.rightValue}
              />

              <div className="input-group-addon">{this.props.rightInputName}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConversionForm;
