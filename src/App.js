import "./css/style.css";
import React from "react";
import axios from "axios";
import TodayCenter from "./components/TodayCenter";
import SubPartsCenter from "./components/SubPartsCenter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todayData: [], forecast: [] };
    this.headingOne = React.createRef("notChecked");
    this.headingTwo = React.createRef("notChecked");
    this.headingThree = React.createRef("notChecked");
  }

  fetchApi = (location) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_SECERET_API}&q=${location}&days=5&aqi=yes&alerts=no`
      )
      .then((res) => {
        let newArray = [];
        newArray = [...newArray, res.data.current];
        this.setState({ todayData: newArray });
        newArray = [];
        newArray = [...newArray, res.data.forecast.forecastday];
        this.setState({ forecast: newArray });
        let newF = [];
        newF = [...res.data.forecast.forecastday];
        if (newF.length === 4) {
          this.setState({ forecast: newF });
        }
        if (newF.length === 5) {
          newF.splice(0, 1);
          this.setState({ forecast: newF });
        }
      });
  };

  componentDidMount() {
    this.fetchApi("Hamilton, Ontario, Canada");
  }

  render() {
    return (
      <div className="App">
        <div className="cityNames">
          {/* <h1
            ref={this.headingOne}
            onClick={this.fetchApi.bind(
              this,
              "Ottawa, Ontario, Canada",
              this.headingOne
            )}
          >
            Click me
          </h1> */}
          {/*  */}
          <h1 onClick={this.fetchApi.bind(this, "Ottawa, Ontario, Canada")}>
            Ottawa
          </h1>
          <h1 onClick={this.fetchApi.bind(this, "Hamilton, Ontario, Canada")}>
            Hamilton
          </h1>
          <h1 onClick={this.fetchApi.bind(this, "Vaughan, Ontario, Canada")}>
            Vaughan
          </h1>
        </div>

        {this.state.todayData.length === 0 ? (
          this.fetchApi("Hamilton, Ontario, Canada")
        ) : (
          <div className="dataContainer">
            <TodayCenter data={this.state.todayData} />
            <div className="subDataContainer">
              {this.state.forecast.map((item) => (
                <SubPartsCenter key={item.date} list={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
