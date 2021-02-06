import React from "react";
import Config from "./Config.json";
var ls = require("local-storage");

class FirstLaunch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { default: false };
  }
  save() {
    if (this.state.default) {
      for (let i = 0; i < Object.keys(Config).length; i++) {
        // console.log(Object.keys(Config)[i], Object.values(Config)[i]);
        ls.set(Object.keys(Config)[i], Object.values(Config)[i]);
      }
      ls.set("firstLaunchDone", true);
    }
    window.location.reload();
  }
  onToggle() {
    // console.log(e.target.value);
    this.setState({ default: !this.state.default });
  }
  render() {
    return (
      <div className="firstLaunchWindow">
        <div>
          For now, please check "default" and click Save <br /> This will save
          default values in localStorage
        </div>
        <div>
          <input
            type="checkbox"
            name="default"
            value={this.state.default}
            onChange={this.onToggle.bind(this)}
          ></input>
          <span>Default</span>
        </div>
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    );
  }
}

export default FirstLaunch;
