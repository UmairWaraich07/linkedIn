import React from "react";
import "./FeedOption.css";

function FeedOption({ Icon, title, color }) {
  return (
    <div className="uploadOption">
      {Icon && <Icon style={{ color: color }} className="uploadOption__icon" />}
      <div className="title">{title}</div>
    </div>
  );
}

export default FeedOption;
