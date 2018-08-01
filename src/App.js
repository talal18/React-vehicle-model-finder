import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Car from "./components/Car";

class App extends React.Component {
  state = {
    results: [],
    count: undefined,
    make_name: undefined,
    model_name: undefined,
    vehicle_type: undefined
  };

  getCarInfo = async e => {
    e.preventDefault();

    const model = e.target.elements.model.value;
    const year = e.target.elements.year.value;
    const type = e.target.elements.type.value;

    const api_call = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${model}/modelyear/${year}/vehicleType/${type}?format=json`
    );
    const data = await api_call.json();

    this.setState({
      results: data.Results
    });
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row>">
                <div className="col-xs-12 title-container">
                  <Title />
                </div>
                <div className="col-xs-12 form-container">
                  <Form getCarInfo={this.getCarInfo} />;
                  {this.state.results.map(carDetails => {
                    return (
                      <Car
                        make_name={carDetails.Make_Name}
                        model_name={carDetails.Model_Name}
                        vehicle_type={carDetails.Vehicle_Type}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
