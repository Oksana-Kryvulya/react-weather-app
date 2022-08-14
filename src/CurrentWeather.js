import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="current-weather" style={{ height: `25rem` }}>
        <h1 id="city-h1">Kharkiv</h1>
        <h2>
          <span id="weekday">Sunday </span>
          <span id="current-date">19</span>
        </h2>
        <h1>
          <span id="current-temp">24</span>
          <span id="current-units">°C</span>
        </h1>
        <div className="icon-image">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            style={{ border: `20px` }}
            alt="Clear"
            id="icon"
          />
        </div>
        <h3 className="description" id="wether-description">
          weather discription
        </h3>
        <p className="weather-data">
          Humidity: <span id="humidity">35</span>%, Wind:
          <span id="wind">5.36</span> m/c
        </p>
      </div>
    </div>
  );
}
