import Config from "./Config.json";
import React from "react";
import Console from "./console";

class ListCategory extends React.Component {
  constructor(props) {
    super(props);

    this.listItem = this.props.listItems.map(
      (site) => (
        // <li>
        <ListItem keyName={site.key} name={site.name} urlName={site.url} />
      )
      // console.log(site.key)
      // </li>
    );
  }

  render() {
    return (
      <li className="category">
        <h2 className="categoryName">{this.props.categoryName}</h2>
        {this.listItem}
      </li>
    );
  }
}
class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li className="command">
          <a href={this.props.urlName}>
            <span className="commandKey">{this.props.keyName}</span>
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
    this.listItem = Config.bookmarks.map((site, index) => (
      <ListCategory listItems={site.list} categoryName={site.title} />
    ));
  }

  render() {
    return <ul className="lists">{this.listItem}</ul>;
  }
}

export default Sites;
