import React from "react";
import Config from "./Config.json";
var fontColorContrast = require("font-color-contrast");
var isUrl = require("is-url");
class Form extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isSmall: false };
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

  // textChanged() {
  //   this.setState((state) => ({
  //     text: document.getElementsByClassName("searchInput")[0].value,
  //   }));
  //   console.log(this.state.text);
  // }
  checkIfSite(name) {}

  submitForm(e) {
    window.open(
      isUrl(e.target.children[0].value)
        ? e.target.children[0].value
        : Config.searchEngine + e.target.children[0].value,
      "_parent"
    );
    e.preventDefault();
    // console.log();
  }
  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)} className={`searchForm`}>
        <input
          // className={`searchInput ${this.state.isSmall ? "small" : "big"}`}
          className="searchInput"
          type="text"
          // onClick={this.toggle.bind(this)}
          style={{
            boxShadow: `${Config.shadowStrength} ${Config.shadowColor}`,
            backgroundColor: `${Config.color}`,
            color:
              fontColorContrast(`${Config.color}`) == "#ffffff"
                ? "#fafafa"
                : "#0a0a0a",
          }}
        ></input>
      </form>
    );
  }
}
export default Form;
