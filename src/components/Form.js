import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getCarInfo}>
        <input type="text" name="model" required placeholder="model ..." />
        <input type="text" name="year" required placeholder="year ..." />
        <select name="type">
          <option value="motorcycle">Motorcycle</option>
          <option value="passenger car">Passenger Car</option>
          <option value="bus">Bus</option>
          <option value="multipurpose passenger vehicle">
            Multipurpose passenger vehicle
          </option>
          <option value="incomplete vehicle">Incomplete vehicle</option>
          <option value="truck">Truck</option>
          <option value="trailer">Trailer</option>
        </select>

        <button>Get info</button>
      </form>
    );
  }
}

export default Form;
