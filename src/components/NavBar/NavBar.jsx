import React from "react";
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <nav className="project-nav">
      <div className="project-nav__links-wrapper">
        <Link to="/">Форма добавления заявок</Link>
        <Link to="/requests">Таблица с заявками</Link>
      </div>
    </nav>
  );
}

export default NavBar