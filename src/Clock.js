import React from "react";
import Config from "./Config.json";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isToggled: false };
    // this.state = { isToggled: false };
    // this.state.isSmall = this.state.isSmall.bind(this);
  }

  // componentDidMount() {
  //   this.setState({ isSmall: false });

  //   // document.getElementsByClassName("searchInput")[0].value = this.state.text;
  // }

  // toggle() {
  //   this.setState((state) => ({
  //     isSmall: !state.isSmall,
  //   }));
  // }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
    this.setState({ isToggled: false });
  }

  toggle() {
    this.setState((state) => ({
      isToggled: !state.isToggled,
    }));
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      //is this ok?
      <div
        className={`Clock ${this.state.isToggled ? "small" : "big"}`}
        style={{ color: Config.textColor }}
        onClick={this.toggle.bind(this)}
      >
        <div
          className="Hours"
          style={{
            textShadow: `${Config.shadowStrength} ${Config.shadowColor}`,
          }}
        >
          {(this.state.date.getHours() < 10 ? "0" : "") +
            this.state.date.getHours()}{" "}
        </div>
        <div
          className="Minutes"
          style={{
            textShadow: `${Config.shadowStrength} ${Config.shadowColor}`,
          }}
        >
          {(this.state.date.getMinutes() < 10 ? "0" : "") +
            this.state.date.getMinutes()}{" "}
        </div>
      </div>
    );
  }
}
export default Clock;
