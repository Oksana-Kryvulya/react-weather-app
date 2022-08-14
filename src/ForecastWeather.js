import React from "react";
import "./ForecastWeather.css";

export default function ForecastWeather() {
  return (
    <div className="ForecastWeather">
      <div
        className="forecast-weather"
        style={{ height: `25rem` }}
        id="forecast"
      >
        <div className="row">
          <div className="col-5 week-day">Sunday</div>
          <div className="col-5 day-temperatura">
            <span className="max-temperatura">24</span>° /
            <span className="min-temperatura">15</span>°
          </div>
          <div className="col-2 day-icon">
            <img
              src="https://openweathermap.org/img/wn/09d@2x.png"
              height="50"
              alt="Clear"
              id="icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5 week-day">Monday</div>
          <div className="col-5 day-temperatura">
            <span className="max-temperatura">27</span>° /
            <span className="min-temperatura">16</span>°
          </div>
          <div className="col-2 day-icon">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              height="50"
              alt="Clear"
              id="icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5 week-day">Tuesday</div>
          <div className="col-5 day-temperatura">
            <span className="max-temperatura">30</span>° /
            <span className="min-temperatura">19</span>°
          </div>
          <div className="col-2 day-icon">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              height="50"
              alt="Clear"
              id="icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5 week-day">Wednesday</div>
          <div className="col-5 day-temperatura">
            <span className="max-temperatura">23</span>° /
            <span className="min-temperatura">17</span>°
          </div>
          <div className="col-2 day-icon">
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              height="50"
              alt="Clear"
              id="icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5 week-day">Thursday</div>
          <div className="col-5 day-temperatura">
            <span className="max-temperatura">28</span>° /
            <span className="min-temperatura">16</span>°
          </div>
          <div className="col-2 day-icon">
            <img
              src="https://openweathermap.org/img/wn/02d@2x.png"
              height="50"
              alt="Clear"
              id="icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5 week-day">Friday</div>
          <div className="col-5 day-temperatura">
            <span className="max-temperatura">32</span>° /
            <span className="min-temperatura">20</span>°
          </div>
          <div className="col-2 day-icon">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              height="50"
              alt="Clear"
              id="icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5 week-day">Saturday</div>
          <div className="col-5 day-temperatura">
            <span className="max-temperatura">33</span>° /
            <span className="min-temperatura">20</span>°
          </div>
          <div className="col-2 day-icon">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              height="50"
              alt="Clear"
              id="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
