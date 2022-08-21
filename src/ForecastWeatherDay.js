import React from "react";
import WeekDay from "./WeekDay";
import "./ForecastWeatherDay.css";
import ForecastDailyTemperatura from "./ForecastDailyTemperatura";

export default function ForecastWeatherDay(props) {
  return (
    <div className="ForecastWeatherDay">
      <div className="row">
        <div className="col-5 week-day">
          {<WeekDay date={props.data.date} />}
        </div>

        <div className="col-5 day-temperatura">
          <ForecastDailyTemperatura data={props.data} unit={props.unit} />
        </div>
        <div className="col-2 day-icon">
          <img
            src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            height="50"
            alt="Clear"
            id="icon"
          />
        </div>
      </div>
    </div>
  );
}
