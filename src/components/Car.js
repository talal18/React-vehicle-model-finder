import React from "react";

class Car extends React.Component {
  render() {
    return (
      <div>
        {this.props.make_name && (
          <p className="result">Make: {this.props.make_name}</p>
        )}
        {this.props.model_name && (
          <p className="result">Model: {this.props.model_name}</p>
        )}
        <br />
        <br />
      </div>
    );
  }
}

export default Car;
