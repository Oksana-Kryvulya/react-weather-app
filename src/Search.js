import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="Search">
      <div className="input-window mt-2">
        <form id="input-city-form" className="row g-3">
          <div className="col-md-6">
            <input
              className="form-control input-lg"
              type="text"
              placeholder="Enter city..."
              id="input-city"
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
    </div>
  );
}
