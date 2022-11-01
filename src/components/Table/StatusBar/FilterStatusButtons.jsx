import React from "react";

function FilterStatusButtons({ buttons, clickStatus}) {
  const statusButtons = buttons.map((button) => {
    return (
      <a
        key={button.value}
        href="/#"
        className={`btn btn-light ${
          button.value === localStorage.getItem("filter-status") ? "active" : ""
        }`}
        data-value={button.value}
        onClick={clickStatus}
      >
        {button.description}
      </a>
    );
  });
  return (
    <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
      {statusButtons}
    </div>
  );
}

export default FilterStatusButtons;
