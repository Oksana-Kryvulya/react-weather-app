import React, { useState } from "react";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
export default function Weather(props) {
  let apiKey = "e8e6c14c32a29720f6e13266006ad7c5";
  let cityRealName;
  let country;
  let baseGeoUrl = `https://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${apiKey}`;
  let baseWeatherUrl = `https://api.openweathermap.org/data/3.0/onecall?exclude=hourly&appid=${apiKey}`;

  const [city, setCity] = useState(props.city);

  const [weatherData, setWeatherData] = useState({
    ready: false,
  });

  let [unit, setUnit] = useState("celsius");
  let [stateCelsius, setStateCelsius] = useState("active");
  let [stateFahrenheit, setStateFahrenheit] = useState("hand");

  console.log("INITIALISING!!!!!!!!!!!!!!");
  console.log(weatherData.ready);

  function changeToFahrenheit(event) {
    event.preventDefault();
    if (unit !== "fahrenheit") {
      setStateFahrenheit("active");
      setStateCelsius("hand");
      setUnit("fahrenheit");
    }
  }
  function changeToCelsius(event) {
    event.preventDefault();
    if (unit !== "celsius") {
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

  function setWeatherInfo(response) {
    console.log("setWeatherInfo");
    let forecastWeatherArray = new Array(7);
    response.data.daily.forEach(function (day, index) {
      if (index < 7) {
        forecastWeatherArray[index] = {
          maxTemp: response.data.daily[index].temp.max,
          minTemp: response.data.daily[index].temp.min,
          icon: response.data.daily[index].weather.icon,
          date: new Date(response.data.daily[index].dt * 1000),
        };
      }
    });

    setWeatherData({
      ready: true,
      country: country,
      city: cityRealName,
      date: new Date(response.data.current.dt * 1000),
      currentWeather: {
        temperatura: response.data.current.temp,
        humidity: response.data.current.humidity,
        wind: response.data.current.wind_speed,
        description: response.data.current.weather[0].description,
        icon: response.data.current.weather[0].icon,
      },
      forecastWeather: forecastWeatherArray,
    });
  }

  function getWeatherData(response) {
    cityRealName = response.data[0].name;
    let lat = response.data[0].lat;
    let lon = response.data[0].lon;
    country = response.data[0].country;

    axios
      .get(`${baseWeatherUrl}&lat=${lat}&lon=${lon}&units=metric`)
      .then(setWeatherInfo);
  }

  function search() {
    axios.get(`${baseGeoUrl}&q=${city}`).then(getWeatherData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCityName(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    console.log(weatherData);
    console.log("rendering weather");

    return (
      <div className="Search">
        <div className="input-window mt-2">
          <form
            id="input-city-form"
            className="row g-3"
            onSubmit={handleSubmit}
          >
            <div className="col-md-6">
              <input
                className="form-control input-lg"
                type="search"
                placeholder="Enter city..."
                id="input-city"
                onChange={changeCityName}
              />
            </div>
            <div className="col text-start">
              <input
                className="btn btn-light"
                type="submit"
                id="search"
                value="🔍Search"
              />
            </div>
            <div className="col flag">
              <input
                className="btn btn-light"
                type="submit"
                id="location"
                value="🚩Local"
              />
            </div>
          </form>
        </div>
        <div className="base-window">
          <div className="row">
            <div className="col-9 ">
              <p className="text-start">
                <span id="city">{weatherData.city}</span>,{" "}
                <span id="country"> {weatherData.country} </span>, last updated{" "}
                <span id="current-time"> {currentTime(weatherData.date)}</span>
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
            <CurrentWeather
              data={weatherData.currentWeather}
              city={weatherData.city}
              date={weatherData.date}
              unit={unit}
            />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    console.log("loading");
    console.log(weatherData.ready);
    return "Loading...";
  }
}
