import React from "react";
import ConvertToFahrenheit from "./ConvertToFahrenheit";

export default function CurrentTemp(props) {
  if (props.unit === "celsius")
    return (
      <h1>
        <span id="current-temp">{Math.round(props.temperatura)}</span>
        <span id="current-units">°C</span>
      </h1>
    );
  else
    return (
      <h1>
        <span id="current-temp">
          <ConvertToFahrenheit temperatura={props.temperatura} />
        </span>
        <span id="current-units">°F</span>
      </h1>
    );
}
