import React from "react";
import lib from "../lib/todaySet";

class TodayCenter extends React.Component {
  // Constructor

  render() {
    let today = this.props.data[0].condition.text;
    let temp = this.props.data[0].temp_c;

    let todayDescriptionArr = [];
    todayDescriptionArr = lib.setDescription(today);

    return (
      <div className="todayContainer">
        <div>
          <span className="todayText">Today</span>
        </div>
        <div className="todayContainer-description">
          <div>
            <i className={todayDescriptionArr[1]}></i>
          </div>
          {/* todayContainer-description--temp */}
          <div className="todayContainer-description--temp">
            <span className="degreeText">{temp}&#176;</span>
            <span>{todayDescriptionArr[0]}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TodayCenter;
