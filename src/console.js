import React from "react";
import Clock from "./Clock";
import Form from "./Form";
import Sites from "./Sites";
// import FrequentBookmarks from "./FrequentBookmarks";
import { CSSTransition } from "react-transition-group";
// import Config from "./Config.json";
var ls = require("local-storage");
// class ConsoleSmall extends React.Component {}
// class ConsoleBig extends React.Component {}
class Console extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isToggled: this.props.isBlurred, text: "" };
    this.state = { text: "" };
    this.handleIdleTimeout();
  }

  componentDidMount() {
    // this.setState({ isToggled: this.props.isBlurred });
    this.idleTimerID = null;
  }

  toggle() {
    // this.setState((state) => ({
    //   isToggled: !state.isToggled,
    // }));
    this.props.blurredState(!this.props.isBlurred);
    this.handleIdleTimeout();
  }

  handleIdleTimeout() {
    // if (this.state.isToggled) {
    // console.log("???");
    // clearTimeout(this.timerID);
    //   this.clearTimeout();
    // } else if (!this.state.isToggled) {
    if (ls.get("timeout") > 0) {
      this.setIdleTimeout(ls.get("timeout"));
    }

    // }
  }
  setIdleTimeout(value) {
    this.clearIdleTimeout();
    this.idleTimerID = setTimeout(() => {
      // this.setState({ isToggled: false });
      this.props.blurredState(false);
      // this.handleBlackingTimeout();
      this.props.blackingOutTimeout();
    }, value);
  }
  clearIdleTimeout() {
    // console.log("clear");
    if (this.idleTimerID) {
      clearTimeout(this.idleTimerID);
    }
  }

  setSameText(text) {
    this.setState({ text: text });
    // console.log(this.state.text);
  }
  render() {
    return (
      //is this ok?

      <div>
        {
          /* <div
          className={`consoleSmall ${this.state.isToggled ? "small" : "big"}`}
        >*/
        <div style={{display:"flex",width:"100vw",height:"100vh",position:"fixed",pointerEvents:"none"}}>

          <Sites
            setText={this.setSameText.bind(this)}
            clearTimeout={this.handleIdleTimeout.bind(this)}
            toggle={this.toggle.bind(this)}
            shown={this.props.isBlurred}
            defaultText={this.state.text}
            // class={`${this.state.isToggled ? "small" : "big"} slideUp`}
            class={`slideUp`}
          />
          </div>
        }

        <CSSTransition
          // in={!this.state.isToggled}
          in={!this.props.isBlurred}
          timeout={200}
          classNames="overlayForm"
          unmountOnExit
        >
        <div style={{display:"flex",width:"100vw",height:"100vh",position:"fixed"}}>
          <div className="consoleSmall">
            {/* <div onClick={this.toggle.bind(this)}> */}
            {/* <div> */}
            <Clock class="backgroundClock" onClick={this.toggle.bind(this)} />
            {/* </div> */}

            <Form
              isBlackingOut={this.props.isBlackingOut}
              defaultText={this.state.text}
              setText={this.setSameText.bind(this)}
              class="backgroundForm"
              renderBookmarks={true}
            />
          </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
export default Console;
