import React from "react";
import Clock from "./Clock";
import Form from "./Form";
import Sites from "./Sites";
import FrequentBookmarks from "./FrequentBookmarks";
import { CSSTransition } from "react-transition-group";
import Config from "./Config.json";
// class ConsoleSmall extends React.Component {}
// class ConsoleBig extends React.Component {}
class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: true, text: "" };
  }

  componentDidMount() {
    this.setState({ isToggled: true });
    this.timerID = null;
  }

  toggle() {
    this.setState((state) => ({
      isToggled: !state.isToggled,
    }));
    this.props.blurredState(!this.state.isToggled);
    this.handleTimeout();
  }

  handleTimeout() {
    // if (this.state.isToggled) {
    // console.log("???");
    // clearTimeout(this.timerID);
    //   this.clearTimeout();
    // } else if (!this.state.isToggled) {
    if (Config.timeout > 0) {
      this.setIdleTimeout(Config.timeout);
    }

    // }
  }
  setIdleTimeout(value) {
    this.clearTimeout();
    this.timerID = setTimeout(() => {
      this.setState({ isToggled: false });
      this.props.blurredState(false);
    }, value);
  }
  clearTimeout() {
    // console.log("clear");
    if (this.timerID) {
      clearTimeout(this.timerID);
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
          <Sites
            setText={this.setSameText.bind(this)}
            clearTimeout={this.handleTimeout.bind(this)}
            toggle={this.toggle.bind(this)}
            shown={this.state.isToggled}
            defaultText={this.state.text}
            // class={`${this.state.isToggled ? "small" : "big"} slideUp`}
            class={`slideUp`}
          />
        }

        <CSSTransition
          in={!this.state.isToggled}
          timeout={200}
          classNames="overlayForm"
          unmountOnExit
        >
          <div className="consoleSmall">
            {/* <div onClick={this.toggle.bind(this)}> */}
            {/* <div> */}
            <Clock class="backgroundClock" onClick={this.toggle.bind(this)} />
            {/* </div> */}

            <Form
              defaultText={this.state.text}
              setText={this.setSameText.bind(this)}
              class="backgroundForm"
              renderBookmarks={true}
            />
          </div>
        </CSSTransition>
      </div>
    );
  }
}
export default Console;
