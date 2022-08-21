import React, { useState } from "react";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import axios from "axios";
export default function Weather(props) {
  let apiKey = "e8e6c14c32a29720f6e13266006ad7c5";
  let cityRealName;
  let country;
  let baseGeoUrl = `https://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${apiKey}`;
  let baseWeatherUrl = `https://api.openweathermap.org/data/3.0/onecall?exclude=hourly&appid=${apiKey}`;
  let baseReverseGeoUrl = `https://api.openweathermap.org/geo/1.0/reverse?limit=1&appid=${apiKey}`;

  const [city, setCity] = useState(props.city);
  const [localCity, setLocalCity] = useState(null);
  const [isLocalCity, setIsLocalCity] = useState(false);
  const [val, setVal] = useState("");
  const [weatherData, setWeatherData] = useState({
    ready: false,
  });

  let [unit, setUnit] = useState("celsius");
  let [stateCelsius, setStateCelsius] = useState("active");
  let [stateFahrenheit, setStateFahrenheit] = useState("hand");

  if (isLocalCity) {
    search();
  }

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
    setIsLocalCity(false);

    let forecastWeatherArray = new Array(7);
    response.data.daily.forEach(function (day, index) {
      if (index < 7) {
        forecastWeatherArray[index] = {
          maxTemp: response.data.daily[index].temp.max,
          minTemp: response.data.daily[index].temp.min,
          icon: response.data.daily[index].weather[0].icon,
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
    setVal(event.target.value);
    setCity(event.target.value);
  }

  function setLocalCityName(response) {
    setCity(response.data[0].name);
    setLocalCity(response.data[0].name);
    setIsLocalCity(true);
  }

  function handleLocalPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    axios
      .get(`${baseReverseGeoUrl}&lat=${lat}&lon=${lon}`)
      .then(setLocalCityName);
  }

  function setLocalWeather(event) {
    event.preventDefault();

    if (localCity) {
      setCity(localCity);

      setIsLocalCity(true);
    } else {
      navigator.geolocation.getCurrentPosition(handleLocalPosition);
    }

    setVal("");
  }

  if (weatherData.ready) {
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
                value={val}
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
                type="button"
                id="location"
                value="🚩Local"
                title="Local Weather"
                onClick={setLocalWeather}
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
            <div className="col-md">
              <CurrentWeather
                data={weatherData.currentWeather}
                city={weatherData.city}
                date={weatherData.date}
                unit={unit}
              />
            </div>
            <div className="col-md">
              <ForecastWeather data={weatherData.forecastWeather} unit={unit} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
