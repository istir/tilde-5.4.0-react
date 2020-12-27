import React from "react";
import Config from "./Config.json";
import FrequentBookmarks from "./FrequentBookmarks";
var fontColorContrast = require("font-color-contrast");
var isUrl = require("is-url");
var weather = require("openweather-apis");

class Weather extends React.Component {
  constructor(props) {
    super(props);

    // this.props.show

    weather.setAPPID("fa54ebb35a166dfa6a6ef9fe7b6dcf06");
    weather.setUnits(Config.weatherUnit);
    Config.weatherLocation != "auto"
      ? weather.setCity(Config.weatherLocation)
      : weather.setCoordinate(-1, 1);
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
    this.getCurrentLocation((callback) => {
      // console.log(callback);
      console.log(callback);
      this.setState((state) => ({ location: callback }));
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
    });
    // return <span>{this.state.location.coords.latitude}</span>;
    // // console.log(this.state.location);
    // weather.getTemperature((temp) => {
    //   // console.log(temp);
    // });
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
          color: Config.textColor,
          filter: "brightness(40%)",
          opacity: this.props.show == "true" ? "1" : "0",
        }}
      >
        {this.state.temperature === null ? "" : this.state.temperature}
        <i
          class={`placeholderIcon owf owf-${this.state.icon}-${
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
  }

  togglePlaceholder() {
    // this.setState((this.state.hidePlaceholder = !this.state.hidePlaceholder));
    this.setState((state) => ({ hidePlaceholder: !state.hidePlaceholder }));
  }

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
        {/* <i class="owf owf-803"></i> */}
        <input
          // className={`searchInput ${this.state.isSmall ? "small" : "big"}`}
          className="searchInput"
          type="text"
          // placeholder={`${this.state.hidePlaceholder ? "" : "EB28"}`}
          onFocus={this.togglePlaceholder.bind(this)}
          onBlur={this.togglePlaceholder.bind(this)}
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
        {this.state.hidePlaceholder ? (
          <Weather show="false" />
        ) : (
          <Weather show="true" />
        )}
        <FrequentBookmarks />
        {/* <Weather /> */}
      </form>
    );
  }
}
export default Form;
