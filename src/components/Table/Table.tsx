import NavBar from "../Navbar/Navbar";
import StatusBar from "./StatusBar/StatusBar";
import LeftPanel from "./LeftPanel/LeftPanel";
import Requests from "./Requests";

import React, {
  ChangeEvent,
  FC,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { TRequest } from "../../models/request";

const Tables: FC = () => {
  const [requests, setRequests] = useState<TRequest[]>([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterProduct, setFilterProduct] = useState("all");
  const [flag, setFlag] = useState(true);
  let filteredByProduct: TRequest[] = [];
  let filteredElements: TRequest[] = [];

  const updateFlag = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  useEffect(() => {
    // Получение значений фильтра из localStorage
    const product = localStorage.getItem("filter-product");
    const status = localStorage.getItem("filter-status");

    // Изменения state для фильтров по статусу и продукту
    setFilterProduct(product || "all");
    setFilterStatus(status || "all");

    const controller = new AbortController();

    fetch("https://crm-server.glitch.me/requests", {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.ok !== true) {
          throw Error("Could not fetch the data from this resource");
        }
        return response.json();
      })
      .then((data) => {
        setRequests(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.log(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [flag]);

  // Фильтр по продукту
  if (filterProduct === "all") {
    filteredByProduct = [...requests];
  } else {
    filteredByProduct = requests.filter((request) => {
      return request.product === filterProduct;
    });
  }

  // Фильтр по статусу
  if (filterStatus === "all") {
    filteredElements = [...filteredByProduct];
  } else {
    filteredElements = filteredByProduct.filter((request) => {
      return request.status === filterStatus;
    });
  }

  // По клику на кнопки статуса, устанавливается фильтр по статусу
  const clickStatus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const value = e.currentTarget.dataset.value;

    if (value) {
      localStorage.setItem(
        "filter-status",
        value
      );

      setFilterStatus(value);
    }
  };

  // При выборе продукта в select, устанавливается фильтр по продукту
  const chooseProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("filter-product", e.target.value);

    setFilterProduct(e.target.value);
  };

  // Счётчик кол-во новых заявок в left-bar
  const newRequests = requests.filter((request) => {
    return request.status === "new";
  });

  return (
    <section className="body--dashboard">
      <NavBar />

      <LeftPanel
        countNewRequests={newRequests.length}
        clickStatus={clickStatus}
      />

      {/* <!-- main-wrapper --> */}
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <StatusBar chooseProduct={chooseProduct} clickStatus={clickStatus} />

          {filteredByProduct && filteredElements && (
            <Requests
              updateFlag={updateFlag}
              requests={filteredElements || filteredByProduct || requests}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Tables;
