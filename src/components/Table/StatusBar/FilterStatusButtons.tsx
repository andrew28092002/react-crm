import React, { FC, useEffect } from "react";
import { setStatusCreator } from "../../../store/reducers/requestsReducer/actionCreators";
import { useTypedDispatch } from "../../../store/store";
import { buttons } from "../../../ui/buttons";

const FilterStatusButtons: FC = () => {
  const dispatch = useTypedDispatch();

  const clickStatus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const status = e.currentTarget.dataset.value;

    if (status) {
      localStorage.setItem("filter-status", status);
      dispatch(setStatusCreator(status));
    }
  };

  const statusButtons = buttons.map((button) => {
    return (
      <a
        key={button.value}
        href="#"
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
};

export default FilterStatusButtons;
