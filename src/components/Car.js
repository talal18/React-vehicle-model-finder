import React from "react";

class Car extends React.Component {
  render() {
    return (
      <div>
        {this.props.make_name && (
          <p className="weather__key">Make: {this.props.make_name}</p>
        )}
        {this.props.model_name && (
          <p className="weather__key">Model: {this.props.model_name}</p>
        )}
        <br />
        <br />
      </div>
    );
  }
}

export default Car;
