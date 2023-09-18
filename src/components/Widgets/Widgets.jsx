import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const widgetsNews = (subtitle, title) => (
    <div className="widgetsNews">
      <div className="widgetsNews__left">
        <FiberManualRecordIcon />
      </div>
      <div className="widgetsNews__right">
        <h4>{subtitle}</h4>
        <p>{title}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h4>LinkedIn News</h4>
        <InfoIcon />
      </div>
      {widgetsNews("Umair is back on LinkedIn", "Top News - 8808 readers")}
      {widgetsNews(
        "Google is hiring Frontend developers",
        "Top News - 7104 readers"
      )}
      {widgetsNews("Tesla hits new highs", "Cars & autos - 1006 readers")}
      {widgetsNews("Is Redux too good?", "Code - 2435 readers")}
      {widgetsNews("React Js is awesome? ", "Frontend - 4211 readers")}
    </div>
  );
}

export default Widgets;
