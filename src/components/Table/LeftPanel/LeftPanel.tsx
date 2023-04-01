import React, { FC, MouseEventHandler } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import User from "./User";

const LeftPanel: FC = () => {
  return (
    <div className="left-panel blue-skin">
      <Logo />

      <User />

      <Navigation />
    </div>
  );
};

export default LeftPanel;
