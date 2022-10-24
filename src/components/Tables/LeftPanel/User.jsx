import React, { Component } from "react";
import avatar from '../../../avatar-128.jpg'

export class User extends Component {
  render() {
    return (
      <div className="left-panel__user clearfix">
        <div className="left-panel__user-photo">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="left-panel__user-name">
          Петр <br />
          Васильевич
        </div>
      </div>
    );
  }
}

export default User;
