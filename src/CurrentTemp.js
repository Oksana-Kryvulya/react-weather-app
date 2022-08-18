import React from "react";

export default function CurrentTemp(props) {
  function convertToFahrenheit() {
    return Math.round((props.temperatura * 9) / 5 + 32);
  }
  console.log("CurrentTemp");
  console.log(props.unit);
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
        <span id="current-temp">{convertToFahrenheit()}</span>
        <span id="current-units">°F</span>
      </h1>
    );
}
