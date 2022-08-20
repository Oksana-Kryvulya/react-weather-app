import React, { useState } from "react";
import CurrentTemp from "./CurrentTemp";
import "./CurrentWeather.css";
import WeekDay from "./WeekDay";

export default function CurrentWeather(props) {
  console.log("CurrentWeather");
  console.log(props.data);

  return (
    <div className="CurrentWeather">
      <div className="col-md">
        <div className="current-weather" style={{ height: `25rem` }}>
          <h1 id="city-h1">{props.city}</h1>
          <h2>
            <span id="weekday">
              <WeekDay date={props.date} />
            </span>{" "}
            <span id="current-date">{props.date.getDate()}</span>
          </h2>
          <CurrentTemp temperatura={props.data.temperatura} unit={props.unit} />

          <div className="icon-image">
            <img
              src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              style={{ border: `20px` }}
              alt="Clear"
              id="icon"
            />
          </div>
          <h3 className="description" id="wether-description">
            {props.data.description}
          </h3>
          <p className="weather-data">
            Humidity:{" "}
            <span id="humidity">{Math.round(props.data.humidity)}</span>
            %, Wind:
            <span id="wind"> {props.data.wind}</span> m/c
          </p>
        </div>
      </div>
    </div>
  );
}
