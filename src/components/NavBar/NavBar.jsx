import React, { Component } from "react";
import {Link} from 'react-router-dom'


export class NavBar extends Component {
  render() {
    return (
      <nav className="project-nav">
        <div className="project-nav__links-wrapper">
          <Link to="/">Форма добавления заявок</Link>
          <Link to="/requests">Таблица с заявками</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
