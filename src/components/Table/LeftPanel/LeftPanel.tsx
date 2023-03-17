import React, { FC, MouseEventHandler } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import User from "./User";

type Props = {
  countNewRequests: number
  clickStatus: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const LeftPanel: FC<Props> = ({ countNewRequests, clickStatus}) => {
  return (
    <div className="left-panel blue-skin">
      <Logo />

      <User />

      <Navigation
        countNewRequests={countNewRequests}
        clickStatus={clickStatus}
      />
    </div>
  );
}

export default LeftPanel;
