import React, { Children } from "react";
import { useContext } from "react";
import { NewRequest } from "./Tables";

function LinkTable(props) {
  const count = useContext(NewRequest);

  if (props.dataValue === "new" && props.dataRole) {
    return (
      <a
        key={props.value}
        href={props.href}
        data-value={props.dataValue}
        data-role={props.dataRole}
        value={props.value}
        onClick={props.onClick}
        className={props.classAttr}
      >
        {props.children}

        <div className="badge" id="badge-new">
          {count}
        </div>
      </a>
    );
  } else if (props.dataRole) {
    return (
      <a
        key={props.value}
        href={props.href}
        data-value={props.dataValue}
        data-role={props.dataRole}
        value={props.value}
        onClick={props.onClick}
        className={props.classAttr}
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <a
        key={props.value}
        href={props.href}
        data-value={props.dataValue}
        value={props.value}
        className={props.classAttr}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  }
}

export default LinkTable;
