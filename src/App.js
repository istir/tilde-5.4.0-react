import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Clock from "./Clock";
// import "./consoleSmall";
// import Config from "./Config.json";
import Console from "./console";
import "./owfont-master/css/owfont-regular.css";
import "./product-sans/GoogleSans.css";
import Background from "./Background";
import FirstLaunch from "./FirstLaunch";
var ls = require("local-storage");
// const Clock = React.lazy(() => import("./Clock"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blurred: true, blackingOut: false };

    //LOCAL STORAGE DIRTY "SET"
    // for (let i = 0; i < Object.keys(Config).length; i++) {
    //   // console.log(Object.keys(Config)[i], Object.values(Config)[i]);
    //   ls.set(Object.keys(Config)[i], Object.values(Config)[i]);
    // }
  }

  componentDidMount() {
    document.body.addEventListener("keydown", (e) => {
      if (document.activeElement == document.body) {
        if (document.getElementsByTagName("input").length > 0) {
          document.getElementsByTagName("input")[0].focus();
        }
      }
    });
    document.body.addEventListener("mousemove", (e) => {
      this.setState({ blackingOut: false });
      this.handleBlackingTimeout();
    });
    document.onvisibilitychange = (e) => {
      this.setState({ blackingOut: false });
      this.handleBlackingTimeout();
    };
  }

  setBlackingOut(value) {
    this.setState({ blackingOut: value });
  }

  handleBlackingTimeout() {
    if (ls.get("blackingOutTimeout") > 0) {
      this.setBlackingTimeout(ls.get("blackingOutTimeout"));
    }
  }
  setBlackingTimeout(value) {
    this.clearBlackingTimeout();
    this.blackingTimerID = setTimeout(() => {
      this.setBlackingOut(true);
    }, value);
  }
  clearBlackingTimeout() {
    // console.log("clear");
    if (this.blackingTimerID) {
      clearTimeout(this.blackingTimerID);
    }
  }

  setBlur(value) {
    this.setState({ blurred: value });
  }
  getBlur() {
    if (this.state.blurred) {
      // return Config.blurStrength;
      return ls.get("blurStrength");
    } else {
      return 0;
    }
  }
  getDimPercent() {
    if (this.state.blurred) {
      return ls.get("dimPercentage");
    } else {
      return 0;
    }
  }

  render() {
    return (
      // <div  className={`App ${
      //   this.state.blackingOut ? "blackingOut" : ""
      // }`}>

      // {!ls.get("firstLaunchDone")
      //   <FirstLaunch />;
      //   console.log("TODO");
      // }}
      <div className="App">
        {!ls.get("firstLaunchDone") ? (
          <FirstLaunch />
        ) : (
          <div>
            {" "}
            <div
              className="Background"
              style={{
                backgroundImage: `url(${ls.get("background")})`,
                // filter: `blur(${this.getBlur()}px) brightness(${
                //   1 - Config.dimPercentage / 100
                // })`,
              }}
            ></div>
            <div
              className={`backgroundBlur ${
                this.state.blackingOut
                  ? "blackingOut blackingOutBackground"
                  : ""
              }`}
              style={{
                backdropFilter: `blur(${this.getBlur()}px) brightness(${
                  1 - this.getDimPercent() / 100
                })`,
              }}
              onClick={() => {
                this.setState({ blurred: false });
              }}
            ></div>
            {/* <div className="Clock"> */}
            {/* <Background /> */}
            <Console
              // blackingOut={this.setBlackingOut.bind(this)}
              isBlackingOut={this.state.blackingOut}
              blackingOutTimeout={this.handleBlackingTimeout.bind(this)}
              isBlurred={this.state.blurred}
              blurredState={this.setBlur.bind(this)}
            />
            {/* <Clock /> */}
            {/* <div className="Clock">TEXT</div> */}
            {/* </div> */}
          </div>
        )}
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
