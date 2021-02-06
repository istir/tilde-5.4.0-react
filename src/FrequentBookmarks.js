import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Config from "./Config.json";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fab } from "@fortawesome/free-brands-svg-icons";
var ls = require("local-storage");

library.add(fab);
class FrequentBookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.listItem = ls.get("frequentBookmarks").map((site) => (
      <a
        key={site.url}
        style={{
          color: ls.get("iconColor"),
          filter: `drop-shadow(${ls.get("shadowStrength")} ${ls.get(
            "shadowColor"
          )})`,
        }}
        href={site.url}
        className="frequentBookmarkIcon"
      >
        <FontAwesomeIcon
          icon={["fab", site.icon]}
          size={ls.get("frequentNameShown") ? "2x" : "3x"}
        />

        {ls.get("frequentNameShown") ? (
          <span className="frequentName">{site.name}</span>
        ) : (
          false
        )}
      </a>
    ));
  }

  render() {
    return (
      <div
        className={`frequentBookmarks ${
          this.props.isBlackingOut ? "blackingOut blackingOutFilter" : ""
        }`}
      >
        {this.listItem}
      </div>
    );
  }
}
export default FrequentBookmarks;
