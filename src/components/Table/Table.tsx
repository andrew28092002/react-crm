import NavBar from "../Navbar/Navbar";
import StatusBar from "./StatusBar/StatusBar";
import LeftPanel from "./LeftPanel/LeftPanel";
import Requests from "./Requests";

import React, { FC, useEffect } from "react";
import {
  setProdcutCreator,
  setStatusCreator,
} from "../../store/reducers/requestsReducer/actionCreators";
import { useTypedDispatch, useTypedSelector } from "../../store/store";
import { getAllRequestsAction } from "../../store/reducers/requestsReducer/actions";

const Tables: FC = () => {
  const dispatch = useTypedDispatch();
  const {product, status} = useTypedSelector(state => state.request)
  // console.log(product, status)

  useEffect(() => {
    dispatch(getAllRequestsAction());
    const product = localStorage.getItem("filter-product");
    const status = localStorage.getItem("filter-status");

    if (product) {
      dispatch(setProdcutCreator(product));
    }

    if (status) {
      dispatch(setStatusCreator(status));
    }
  }, [dispatch]);

  return (
    <section className="body--dashboard">
      <NavBar />

      <LeftPanel />

      {/* <!-- main-wrapper --> */}
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <StatusBar />

          <Requests />
        </div>
      </div>
    </section>
  );
};

export default Tables;
