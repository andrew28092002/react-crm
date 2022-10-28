import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import User from "./User";

function LeftPanel(props) {
  return (
    <div className="left-panel blue-skin">
      <Logo />

      <User />

      <Navigation buttons={props.buttons} />
    </div>
  );
}

export default LeftPanel;
