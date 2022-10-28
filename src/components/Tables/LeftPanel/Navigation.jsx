import React from "react";

function Navigation({buttons}) {

  return (
    <div className="left-panel__navigation">
      <div className="left-panel__navigation-title">Заявки</div>
      <ul id="leftStatus">
        <li>
          {buttons}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
