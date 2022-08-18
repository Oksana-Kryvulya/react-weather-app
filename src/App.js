import "./App.css";
import Weather from "./Weather";
import SourceLink from "./SourceLink";

export default function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="container weather-app mt-xs-3 mt-sm-3 mt-md-5 mt-xl-5 pt-xl-5 pt-xxl-5">
          <Weather city="Poltava" />
          <SourceLink />
        </div>
      </div>
    </div>
  );
}
