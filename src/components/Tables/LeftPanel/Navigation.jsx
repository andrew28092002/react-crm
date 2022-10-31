import React from "react";
import LinkTable from "../LinkTable";
import { NewRequest } from "../Tables";

function Navigation({ buttons, newRequests, clickStatus }) {
  const leftButtons = buttons.map((button) => {
    return (
      <NewRequest.Provider value={newRequests.length} key={button.value}>
        <LinkTable
          href="/#"
          classAttr={
            button.value === localStorage.getItem("filter-status")
              ? "active"
              : ""
          }
          dataValue={button.value}
          dataRole="left-status"
          onClick={clickStatus}
        >
          {button.descr}
        </LinkTable>
      </NewRequest.Provider>
    );
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
