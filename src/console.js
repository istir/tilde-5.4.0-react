import React from "react";
import Clock from "./Clock";
import Form from "./Form";
import Sites from "./Sites";
// class ConsoleSmall extends React.Component {}
// class ConsoleBig extends React.Component {}
class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
  }

  componentDidMount() {
    this.setState({ isToggled: false });
  }

  toggle() {
    this.setState((state) => ({
      isToggled: !state.isToggled,
    }));
  }

  render() {
    return (
      //is this ok?
      <div className={`consoleSmall ${this.state.isToggled ? "small" : "big"}`}>
        <Sites />
        <div onClick={this.toggle.bind(this)}>
          <Clock />
        </div>

        <Form />
      </div>
    );
  }
}
export default Console;
