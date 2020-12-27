import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Clock from "./Clock";
// import "./consoleSmall";
import Config from "./Config.json";
import Console from "./console";
import "./owfont-master/css/owfont-regular.css";
// const Clock = React.lazy(() => import("./Clock"));

function App() {
  return (
    <div className="App">
      <div
        className="Background"
        style={{
          backgroundImage: `url(${Config.background})`,
          filter: `blur(${Config.blurStrength}px) brightness(${
            1 - Config.dimPercentage / 100
          })`,
        }}
      ></div>
      {/* <div className="Clock"> */}
      <Console />
      {/* <Clock /> */}
      {/* <div className="Clock">TEXT</div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
