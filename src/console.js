import React from "react";
import Clock from "./Clock";
import Form from "./Form";
import Sites from "./Sites";
import FrequentBookmarks from "./FrequentBookmarks";
import { CSSTransition } from "react-transition-group";

// class ConsoleSmall extends React.Component {}
// class ConsoleBig extends React.Component {}
class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
  }

  componentDidMount() {
    this.setState({ isToggled: false });
    this.timerID = null;
  }

  toggle() {
    this.setState((state) => ({
      isToggled: !state.isToggled,
    }));
    this.handleTimeout();
  }

  handleTimeout() {
    // if (this.state.isToggled) {
    // console.log("???");
    // clearTimeout(this.timerID);
    //   this.clearTimeout();
    // } else if (!this.state.isToggled) {
    this.setIdleTimeout(2000);
    // }
  }
  setIdleTimeout(value) {
    this.clearTimeout();
    this.timerID = setTimeout(() => {
      this.setState({ isToggled: false });
    }, value);
  }
  clearTimeout() {
    // console.log("clear");
    if (this.timerID) {
      clearTimeout(this.timerID);
    }
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
            // style={{
            //   transform:
            //     typeof document.getElementsByClassName("consoleSmall")[0] !=
            //     "undefined"
            //       ? `translateX(${
            //           document.getElementsByClassName("consoleSmall")[0]
            //             .clientWidth + 10
            //         }px)`
            //       : "translateX(0px)",
            // }}
            clearTimeout={this.handleTimeout.bind(this)}
            toggle={this.toggle.bind(this)}
            shown={this.state.isToggled}
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

            <Form class="backgroundForm" renderBookmarks={true} />
          </div>
        </CSSTransition>
      </div>
    );
  }
}
export default Console;
