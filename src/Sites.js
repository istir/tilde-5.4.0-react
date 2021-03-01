// import Config from "./Config.json";
import React from "react";
// import Console from "./console";
import { CSSTransition } from "react-transition-group";
import Clock from "./Clock";
import Form from "./Form";
var ls = require("local-storage");
class ListCategory extends React.Component {
  constructor(props) {
    super(props);

    this.listItem = this.props.listItems.map(
      (site) => (
        // <li>
        <ListItem
          hideKeys={this.props.hideKeys}
          key={site.url}
          keyName={site.key}
          name={site.name}
          urlName={site.url}
        />
      )
      // console.log(site.key)
      // </li>
    );
  }

  render() {
    // console.log(Config.bookmarks.length);
    return (
      <li
        className="category"
        style={{ maxWidth: `${100 / ls.get("bookmarks").length - 5}%` }}
      >
        <h2 className="categoryName">{this.props.categoryName}</h2>
        {this.listItem}
      </li>
    );
  }
}
class ListItem extends React.Component {
  render() {
    return (
      <ul>
        <li className="command">
          <a href={this.props.urlName}>
            {this.props.hideKeys ? (
              ""
            ) : (
              <span className="commandKey">{this.props.keyName}</span>
            )}
            <span className="commandName">{this.props.name}</span>
          </a>
        </li>
      </ul>
    );
  }
}
class Sites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: true,
      // style: {
      background: `${ls.get("overlayColor")}`,
      left: `0px`,
      top: `0px`,
      hideKeys: false,
      // },
    };
    this.listItem = ls
      .get("bookmarks")
      .map((site, index) => (
        <ListCategory
          hideKeys={this.state.hideKeys}
          key={site.title}
          listItems={site.list}
          categoryName={site.title}
        />
      ));
    this._element = React.createRef();
    // window.addEventListener("resize", this.onWindowResized.bind(this));
  }
  componentDidUpdate() {
    // console.log(this._element.current.clientHeight);
    // console.log("udate");
    // console.log(window.innerWidth);
  }
  onWindowResized() {
    // this.centerHorizontally();
    // this.centerVertically();
    // try {
    //   console.log(this._element.current.clientWidth);
    // } catch (e) {}

    // this.forceUpdate();

    if (window.innerWidth < 500) {
      // console.log(window.innerWidth);
      this.setState({ hideKeys: true });
      // this.listItem = Config.bookmarks.map((site, index) => (
      //   <ListCategory
      //     hideKeys={this.state.hideKeys}
      //     key={site.title}
      //     listItems={site.list}
      //     categoryName={site.title}
      //   />
      // ));
      // this.forceUpdate();
    } else {
      this.setState({ hideKeys: false });
    }
  }
  centerHorizontally() {
    try {
      this.setState({
        left: `calc((100vw - ${this._element.current.clientWidth}px) / 2)`,
      });
    } catch (error) {
      this.setState({
        left: `calc(100vw / 2 - ${50}px)`,
      });
    }
  }
  centerVertically() {
    try {
      this.setState({
        top: `calc(100vh / 2 - ${this._element.current.clientHeight / 2}px)`,
      });
    } catch (error) {
      this.setState({
        top: `calc(100vh / 2 - ${50}px)`,
      });
    }
  }
  componentDidMount() {}

  render() {
    return (
      // <div className="overlayParent" onClick={this.props.toggle}>
      // <div className="overlayParent">
      <CSSTransition
        in={this.props.shown}
        timeout={200}
        onEnter={() => {
          // this.setState({
          //   left: `calc(100vw / 2 - ${this.centerHorizontally()}px)`,
          // });
          // this.setState({
          //   top: `calc(100vh / 2 - ${this.centerVertically()}px)`,
          // });
          // console.log(`${this.centerVertically()}px`);
          this.centerHorizontally();
          this.centerVertically();
        }}
        // mountOnEnter={true}
        classNames="overlayParent"
        unmountOnExit
      >
        <div
          ref={this._element}
          onClick={(e) => {
            // onClick={(e) => {
            this.props.clearTimeout();
            //   e.stopPropagation();
            // }}
            e.stopPropagation();
          }}
          onInput={() => {
            this.props.clearTimeout();
          }}
          style={{
            background: `${ls.get("overlayColor")}`,
            boxShadow: `${ls.get("overlayShadowStrength")} ${ls.get(
              "overlayShadowColor"
            )}`,
            // left: this.state.left,
            // top: this.state.top,
          }}
          // style={this.state.style}
          // style={{left:}}
          // className={`overlay ${this.props.class}`}
          className={`overlay`}
        >
          {/* <ul className={`lists ${this.props.class}`}>{this.listItem}</ul> */}
          <ul className={`lists`}>{this.listItem}</ul>
          <Clock class="overlayClock" onClick={this.props.toggle.bind(this)} />
          <Form
            defaultText={this.props.defaultText}
            setText={this.props.setText}
            class="overlayForm1"
          />
        </div>
      </CSSTransition>
      // </div>
    );
  }
}

export default Sites;
