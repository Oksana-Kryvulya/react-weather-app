import React from "react";
import "./BaseWindow.css";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

export default function BaseWindow() {
  return (
    <div className="BaseWindow">
      <div className="base-window">
        <div className="row">
          <div className="col-9 ">
            <p className="text-start">
              <span id="city">Kharkiv</span>, <span id="country"> UA </span>,
              last updated
              <span id="current-time"> 10 : 50 am</span>
            </p>
          </div>
          <div className="col-3">
            <p className="units">
              <span className="active" id="celsius">
                °C{" "}
              </span>{" "}
              |
              <span className="hand" id="fahrenheit">
                °F
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <CurrentWeather />
          </div>
          <div className="col-md">
            <ForecastWeather />
          </div>
        </div>
      </div>
    </div>
  );
}
