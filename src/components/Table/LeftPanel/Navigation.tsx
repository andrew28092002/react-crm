import React, { FC, useEffect } from "react";
import { setStatusCreator } from "../../../store/reducers/requestsReducer/actionCreators";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { buttons } from "../../../ui/buttons";

const Navigation: FC = () => {
  const { requests } = useTypedSelector((state) => state.request);
  const dispatch = useTypedDispatch();
  const count = requests.filter((request) => request.status === "new").length;

  const clickStatus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const status = e.currentTarget.dataset.value;

    if (status) {
      localStorage.setItem('filter-status', status)
      dispatch(setStatusCreator(status));
    }
  };

  const leftButtons = buttons.map((button) => {
    // Для кнопки 'Новые' справа указывается значение новых заявок
    if (button.value === "new") {
      return (
        <a
          key={button.value}
          href="#"
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
            {count}
          </div>
        </a>
      );
    } else {
      return (
        <a
          key={button.value}
          href="#"
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
};

export default Navigation;
