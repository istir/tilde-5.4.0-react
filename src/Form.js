import React from "react";

import FrequentBookmarks from "./FrequentBookmarks";
var fontColorContrast = require("font-color-contrast");
var isUrl = require("is-url");
var weather = require("openweather-apis");
var ls = require("local-storage");

class Weather extends React.Component {
  constructor(props) {
    super(props);

    // this.props.show

    weather.setAPPID(ls.get("weatherAPIKey"));
    weather.setUnits(ls.get("weatherUnit"));
    ls.get("weatherLocation") !== "auto"
      ? weather.setCity(ls.get("weatherLocation"))
      : weather.setCoordinate(
          ls.get("weatherCoordinates")[0],
          ls.get("weatherCoordinates")[1]
        );
    // console.log(this.getWeather());
    // var info = this.getWeather();
    // console.log(info);
    this.state = {
      location: null,
      temperature: null,
      description: null,
      icon: null,
      isNight: false,
    };

    // weather.setCoordinate(this.state.location);
  }
  getCurrentLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        callback(position);
      });
    } else {
      throw new Error("Your browser does not support geolocation.");
    }
  }

  getCurrentWeather(callback) {
    weather.getAllWeather(function (err, JSONObj) {
      // console.log(JSONObj);
      callback(JSONObj);
      // this.setState((state) => ({
      //   temperature: JSONObj.main.temp,
      // }));
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.forceUpdate();
    }, 1800);
    this.getCurrentLocation((callback) => {
      // console.log(callback);
      // console.log(callback);
      this.setState((state) => ({ location: callback }));
      try {
        weather.setCoordinate(
          this.state.location.coords.latitude,
          this.state.location.coords.longitude
        );
        // weather.getTemperature((err, temp) => {
        //   console.log(temp);
        // });
        // weather.getDescription((err, temp) => {
        //   console.log(temp);
        // });
        this.getCurrentWeather((callback) => {
          // console.log(callback);
          this.setState((state) => ({
            temperature: Math.round(callback.main.temp),
            description: callback.weather[0].main,
            icon: callback.cod,
            isNight:
              new Date().getHours() > 20 && new Date().getHours < 6
                ? true
                : false,
          }));
        });
      } catch (error) {
        console.log(error);
      }
    });
    // return <span>{this.state.location.coords.latitude}</span>;
    // // console.log(this.state.location);
    // weather.getTemperature((temp) => {
    //   // console.log(temp);
    // });
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // style = {
  //   color:Config.textColor,
  //   filter:"brightness(40%)",
  //   visibility: this.props.show?true:false;
  // }
  render() {
    return (
      <div
        className="placeholderText"
        style={{
          color: ls.get("textColor"),
          filter: "brightness(40%)",
          opacity: this.props.show === "true" ? "1" : "0",
        }}
      >
        {this.state.temperature === null ? "" : this.state.temperature}
        <i
          className={`placeholderIcon owf owf-${this.state.icon}-${
            this.state.isNight ? `n` : `d`
          }`}
        ></i>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidePlaceholder: false };
    this._target = React.createRef();
  }

  togglePlaceholder() {
    // this.setState((this.state.hidePlaceholder = !this.state.hidePlaceholder));
    this.setState((state) => ({ hidePlaceholder: !state.hidePlaceholder }));
  }
  showPlaceholder() {
    this.setState({ hidePlaceholder: false });
  }
  hidePlaceholder() {
    this.setState({ hidePlaceholder: true });
  }

  componentDidMount() {
    this._target.current.focus();
  }
  submitForm(e) {
    // console.log(e);
    // console.log(this._target.current.value);
    window.open(
      isUrl(this._target.current.value)
        ? this._target.current.value
        : ls.get("searchEngine") + this._target.current.value,
      "_parent"
    );
    this._target.current.value = "";
    e.preventDefault();
    // console.log();
  }
  ensureTextSimilarity() {
    if (this._target.current) {
      this.props.setText(this._target.current.value);
    }
  }
  render() {
    return (
      <form
        onSubmit={this.submitForm.bind(this)}
        className={`searchForm ${this.props.class}`}
      >
        {/* <i class="owf owf-803"></i> */}
        <div
          style={{ position: "relative" }}
          className={`${
            ls.get("shouldBlackOutSearch")
              ? this.props.isBlackingOut
                ? "blackingOut blackingOutFilter"
                : ""
              : ""
          }`}
        >
          <input
            // className={`searchInput ${this.state.isSmall ? "small" : "big"}`}
            ref={this._target}
            className="searchInput"
            type="text"
            // placeholder={`${this.state.hidePlaceholder ? "" : "EB28"}`}
            onChange={() => {
              this.ensureTextSimilarity();
              if (this._target.current.value.length === 0) {
                this.showPlaceholder();
              } else {
                this.hidePlaceholder();
              }
            }}
            onFocus={() => {
              if (this._target.current.value.length > 0) {
                this.hidePlaceholder();
              }
            }}
            // onBlur={this.togglePlaceholder.bind(this)}
            onBlur={() => {
              if (this._target.current.value.length === 0) {
                this.showPlaceholder();
                // console.log("focus lost");
              }
            }}
            // onChangeCapture={this.togglePlaceholder.bind(this)}
            // onClick={this.toggle.bind(this)}
            defaultValue={this.props.defaultText}
            style={{
              boxShadow: `${ls.get("shadowStrength")} ${ls.get("shadowColor")}`,
              backgroundColor: `${ls.get("color")}`,
              color: this.state.hidePlaceholder
                ? fontColorContrast(`${ls.get("color")}`) === "#ffffff"
                  ? "#fafafa"
                  : "#0a0a0a"
                : "transparent",
            }}
          ></input>
          {this.state.hidePlaceholder ? (
            <Weather show="false" />
          ) : (
            <Weather show="true" />
          )}
        </div>
        {this.props.renderBookmarks ? (
          <FrequentBookmarks isBlackingOut={this.props.isBlackingOut} />
        ) : (
          ""
        )}
        {/* <Weather /> */}
      </form>
    );
  }
}
export default Form;
