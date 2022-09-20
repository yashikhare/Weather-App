import React from "react";
import Result from "../Result/Result";
import "./Forms.css";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "jaipur",
      result: "",
    };
  }
  fetchData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=f68decc3b340003931ab51da8d0f435a`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("result", data);
        this.setState({ result: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log("res", this.state.result);
    //console.log(this.state.emoji)
    return (
      <div id="form">
        <input
          type="text"
          placeholder="Enter city name like 'indore' or 'jaipur' "
          onChange={(e) => {
            this.setState({ emoji: e.target.value });
          }}
        ></input>
        <button onClick={this.fetchData}>submit</button>
        {Object.keys(this.state.result).length > 0 && (
          <Result data={this.state.result} id="data" />
        )}
      </div>
    );
  }
}
export default Form;
