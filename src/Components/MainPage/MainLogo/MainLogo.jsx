import React from "react";
import "./styles.css";

export default function MainLogo() {
  return (
    <span className="MainLogo">
      <span className="MainLogo-polygon"></span>
      <span className="MainLogo-text" style={{ color: "#CC00FF" }}>
        Watch
      </span>
      <span className="MainLogo-text" style={{ color: "#FF00C7" }}>
        Flix
      </span>
      <span className="MainLogo-polygon"></span>
    </span>
  );
}
