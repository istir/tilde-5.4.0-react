import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Config from "./Config.json";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
class FrequentBookmarks extends React.Component {
  constructor(props) {
    super(props);

    this.listItem = Config.frequentBookmarks.map((site) => (
      <a
        key={site.url}
        style={{
          color: Config.iconColor,
          filter: `drop-shadow(${Config.shadowStrength} ${Config.shadowColor})`,
        }}
        href={site.url}
        className="frequentBookmarkIcon"
      >
        <FontAwesomeIcon
          icon={["fab", site.icon]}
          size={Config.frequentNameShown ? "2x" : "3x"}
        />

        {Config.frequentNameShown ? (
          <span className="frequentName">{site.name}</span>
        ) : (
          false
        )}
      </a>
    ));
  }

  render() {
    return <div className="frequentBookmarks">{this.listItem}</div>;
  }
}
export default FrequentBookmarks;
