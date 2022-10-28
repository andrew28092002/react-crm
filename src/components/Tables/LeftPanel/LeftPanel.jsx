import React, { Component } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import User from "./User";

export class LeftPanel extends Component {
  render() {
    return (
      <div className="left-panel blue-skin">

        <Logo/>

        <User/>

        <Navigation buttons={this.props.buttons}/>

      </div>
    );
  }
}

export default LeftPanel;
