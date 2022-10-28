import NavBar from "../NavBar/NavBar";
import FormRow from "./FormRow";
import LeftPanel from "./LeftPanel/LeftPanel";
import TableContent from "./TableContent";

import React, { useEffect, useState } from "react";
import LinkTable from "./LinkTable";

const NewRequest = React.createContext();

function Tables() {
  const [requests, setRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterProduct, setFilterProduct] = useState("all");
  const [flag, setFlag] = useState(true);
  let filterByProduct, filteredElements;

  const updateFlag = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  useEffect(() => {
    const controller = new AbortController();

    // Получение значений фильтра из localStorage
    const product = localStorage.getItem("filter-product");
    const status = localStorage.getItem("filter-status");

    // Изменения state для фильтров по статусу и продукту
    setFilterProduct(product || "all");
    setFilterStatus(status || "all");

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
    filterByProduct = requests;
  } else {
    filterByProduct = requests.filter((request) => {
      return request.product === filterProduct;
    });
  }

  // Фильтр по статусу
  if (filterStatus === "all") {
    filteredElements = filterByProduct;
  } else {
    filteredElements = filterByProduct.filter((request) => {
      return request.status === filterStatus;
    });
  }

  // По клику на кнопки статуса, устанавливается фильтр по статусу
  const clickStatus = (e) => {
    e.preventDefault();

    localStorage.setItem("filter-status", e.target.dataset.value);

    setFilterStatus(e.target.dataset.value);

    return (e) => clickStatus(e);
  };

  // При выборе продукта в select, устанавливается фильтр по продукту
  const chooseProduct = (e) => {
    localStorage.setItem("filter-product", e.target.value);

    setFilterProduct(e.target.value);

    return (e) => chooseProduct();
  };

  // Счётчик кол-во новых заявок в left-bar
  const countNewRequests = requests.filter((request) => {
    return request.status === "new";
  });

  const buttons = [
    {
      value: "all",
      descr: "Все",
    },
    {
      value: "new",
      descr: "Новые",
    },
    {
      value: "inwork",
      descr: "В работе",
    },
    {
      value: "complete",
      descr: "Завершенные",
    },
  ];

  const rowButtons = buttons.map((button) => {
    return (
      <LinkTable
        key={button.value}
        href="/#"
        classAttr={`btn btn-light ${
          "active" ? button.value === filterStatus : ""
        }`}
        dataValue={button.value}
        onClick={clickStatus}
      >
        {button.descr}
      </LinkTable>
    );
  });

  const leftButtons = buttons.map((button) => {
    return (
      <NewRequest.Provider value={countNewRequests.length} key={button.value}>
        <LinkTable
          href="/#"
          classAttr={button.value === filterStatus? "active": ""}
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
    <section className="body--dashboard">
      <NavBar />

      <LeftPanel buttons={leftButtons} />

      {/* <!-- main-wrapper --> */}
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <FormRow chooseProduct={chooseProduct} rowButtons={rowButtons} />

          <TableContent updateFlag={updateFlag} requests={filteredElements} />
        </div>
      </div>
    </section>
  );
}

export { NewRequest };
export default Tables;
