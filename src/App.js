import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Clock from "./Clock";
// import "./consoleSmall";
import Config from "./Config.json";
import Console from "./console";
import "./owfont-master/css/owfont-regular.css";
// import "./product-sans/GoogleSans.css";
import Background from "./Background";
// const Clock = React.lazy(() => import("./Clock"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blurred: true };
  }

  componentDidMount() {
    document.body.addEventListener("keydown", (e) => {
      if (document.activeElement == document.body) {
        if (document.getElementsByTagName("input").length > 0) {
          document.getElementsByTagName("input")[0].focus();
        }
      }
    });
  }

  setBlur(value) {
    this.setState({ blurred: value });
  }
  getBlur() {
    if (this.state.blurred) {
      return Config.blurStrength;
    } else {
      return 0;
    }
  }
  getDimPercent() {
    if (this.state.blurred) {
      return Config.dimPercentage;
    } else {
      return 0;
    }
  }
  render() {
    return (
      <div className="App">
        <div
          className="Background"
          style={{
            backgroundImage: `url(${Config.background})`,
            // filter: `blur(${this.getBlur()}px) brightness(${
            //   1 - Config.dimPercentage / 100
            // })`,
          }}
        ></div>
        <div
          className="backgroundBlur"
          style={{
            backdropFilter: `blur(${this.getBlur()}px) brightness(${
              1 - this.getDimPercent() / 100
            })`,
          }}
        ></div>
        {/* <div className="Clock"> */}
        {/* <Background /> */}
        <Console blurredState={this.setBlur.bind(this)} />
        {/* <Clock /> */}
        {/* <div className="Clock">TEXT</div> */}
        {/* </div> */}
      </div>
    );
  }
}
// function App() {

//   return (
//     <div className="App">
//       <div
//         className="Background"
//         style={{
//           backgroundImage: `url(${Config.background})`,
//           filter: `blur(${Config.blurStrength}px) brightness(${
//             1 - Config.dimPercentage / 100
//           })`,
//         }}
//       ></div>
//       {/* <div className="Clock"> */}
//       {/* <Background /> */}
//       <Console />
//       {/* <Clock /> */}
//       {/* <div className="Clock">TEXT</div> */}
//       {/* </div> */}
//     </div>
//   );
// }

export default App;
