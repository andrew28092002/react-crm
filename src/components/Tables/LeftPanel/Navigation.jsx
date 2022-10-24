import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    const {clickStatus} = this.props

    return (
      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul id="leftStatus">
          <li>
            <a
              data-value="all"
              data-role="left-status"
              href="/#"
              className=""
              onClick={clickStatus} 
            >
              Все вместе
            </a>
          </li>
          <li>
            <a onClick={clickStatus}  data-value="new" data-role="left-status" href="/#">
              Новые
              <div className="badge" id="badge-new">
                {this.props.countNewRequests}
              </div>
            </a>
          </li>
          <li>
            <a onClick={clickStatus}  data-value="inwork" data-role="left-status" href="/#">
              В работе
            </a>
          </li>
          <li>
            <a onClick={clickStatus}   data-value="complete" data-role="left-status" href="/#">
              Завершенные
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
