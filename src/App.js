import "./App.css";
import Search from "./Search";
import BaseWindow from "./BaseWindow";
import SourceLink from "./SourceLink";
function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="container weather-app mt-xs-3 mt-sm-3 mt-md-5 mt-xl-5 pt-xl-5 pt-xxl-5">
          <Search />
          <BaseWindow />
          <SourceLink />
        </div>
      </div>
    </div>
  );
}

export default App;
