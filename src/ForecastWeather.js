import React from "react";
import "./ForecastWeather.css";
import ForecastWeatherDay from "./ForecastWeatherDay";

export default function ForecastWeather(props) {
  return (
    <div className="ForecastWeather">
      <div
        className="forecast-weather"
        style={{ height: `25rem` }}
        id="forecast"
      >
        {props.data.map(function (day, index) {
          return (
            <span key={index}>
              <ForecastWeatherDay data={day} unit={props.unit} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
