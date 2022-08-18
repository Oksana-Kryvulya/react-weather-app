import React, { useState } from "react";
import CurrentTemp from "./CurrentTemp";
import "./CurrentWeather.css";
import WeekDay from "./WeekDay";

export default function CurrentWeather(props) {
  let [unit, setUnit] = useState("celsius");
  console.log("current");
  let [stateCelsius, setStateCelsius] = useState("active");
  let [stateFahrenheit, setStateFahrenheit] = useState("hand");

  function changeToFahrenheit(event) {
    event.preventDefault();
    if (unit != "fahrenheit") {
      setStateFahrenheit("active");
      setStateCelsius("hand");
      setUnit("fahrenheit");
    }
  }
  function changeToCelsius(event) {
    event.preventDefault();
    if (unit != "celsius") {
      setStateFahrenheit("hand");
      setStateCelsius("active");
      setUnit("celsius");
    }
  }

  function currentTime(date) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  console.log("CurrentWeather");
  console.log(props.data);

  return (
    <div className="CurrentWeather">
      <div className="base-window">
        <div className="row">
          <div className="col-9 ">
            <p className="text-start">
              <span id="city">{props.city}</span>,{" "}
              <span id="country"> {props.country} </span>, last updated{" "}
              <span id="current-time"> {currentTime(props.date)}</span>
            </p>
          </div>
          <div className="col-3">
            <p className="units">
              <span className={stateCelsius} id="celsius">
                <a href="/" onClick={changeToCelsius}>
                  °C{" "}
                </a>
              </span>{" "}
              |
              <span className={stateFahrenheit} id="fahrenheit">
                <a href="/" onClick={changeToFahrenheit}>
                  °F{" "}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="current-weather" style={{ height: `25rem` }}>
              <h1 id="city-h1">{props.city}</h1>
              <h2>
                <span id="weekday">
                  <WeekDay date={props.date} />
                </span>{" "}
                <span id="current-date">{props.date.getDate()}</span>
              </h2>
              <CurrentTemp temperatura={props.data.temperatura} unit={unit} />

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
      </div>
    </div>
  );
}
