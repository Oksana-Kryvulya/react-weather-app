import React from "react";
import ConvertToFahrenheit from "./ConvertToFahrenheit";

export default function ForecastDailyTemperatura(props) {
  if (props.unit === "celsius")
    return (
      <span>
        <span className="max-temperatura">
          {Math.round(props.data.maxTemp)}
        </span>
        ° /{" "}
        <span className="min-temperatura">
          {Math.round(props.data.minTemp)}
        </span>
        °
      </span>
    );
  else
    return (
      <span>
        <span className="max-temperatura">
          <ConvertToFahrenheit temperatura={props.data.maxTemp} />
        </span>
        ° /
        <span className="min-temperatura">
          <ConvertToFahrenheit temperatura={props.data.minTemp} />
        </span>
        °
      </span>
    );
}
