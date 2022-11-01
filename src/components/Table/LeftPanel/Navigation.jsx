import React from "react";

function Navigation({ buttons, countNewRequests, clickStatus }) {
  const leftButtons = buttons.map((button) => {
    // Для кнопки 'Новые' справа указывается значение новых заявок
    if (button.value === "new") {
      return (
        <a
          key={button.value}
          href="/#"
          className={
            button.value === localStorage.getItem("filter-status")
              ? "active"
              : ""
          }
          data-value={button.value}
          data-role="left-status"
          onClick={clickStatus}
        >
          {button.description}

          <div className="badge" id="badge-new">
            {countNewRequests}
          </div>
        </a>
      );
    } else {
      return (
        <a
          key={button.value}
          href="/#"
          data-value={button.value}
          data-role="left-status"
          onClick={clickStatus}
          className={
            button.value === localStorage.getItem("filter-status")
              ? "active"
              : ""
          }
        >
          {button.description}
        </a>
      );
    }
  });
 
  return (
    <div className="left-panel__navigation">
      <div className="left-panel__navigation-title">Заявки</div>
      <ul id="leftStatus">
        <li>{leftButtons}</li>
      </ul>
    </div>
  );
}

export default Navigation;
