import NavBar from "../NavBar/NavBar";
import FormRow from "./FormRow";
import LeftPanel from "./LeftPanel/LeftPanel";
import TableContent from "./TableContent";

import React, { useEffect, useState } from "react";

function Tables(props) {
  const [requests, setRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterProduct, setFilterProduct] = useState("all");
  let filterByProduct, filteredElements;

  useEffect(() => {
    const controller = new AbortController();

    // Получение значений фильтра из localStorage
    const product = localStorage.getItem("filter-product") 
    const status = localStorage.getItem("filter-status")

    // Соответствующие изменения в оформлении
    addActiveStatus(status || 'all')
    addCurrentProduct(product || 'all')

    // Изменения state для фильтров по статусу и продукту
    setFilterProduct(product || 'all');
    setFilterStatus(status || 'all');

    fetch("https://crm-server.glitch.me/requests", { signal: controller.signal })
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
  }, [props.flag]);

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

    addActiveStatus(e.target.dataset.value)

    localStorage.setItem("filter-status", e.target.dataset.value);

    setFilterStatus(e.target.dataset.value);

    return (e) => clickStatus(e)
  };

  // При выборе продукта в select, устанавливается фильтр по продукту
  const chooseProduct = (e) => {
    localStorage.setItem("filter-product", e.target.value);

    setFilterProduct(e.target.value);

    return (e) => chooseProduct()
  };

  // Счётчик кол-во новых заявок в left-bar
  const countNewRequests = requests.filter((request) => {
    return request.status === "new";
  });

  // Добавление активного класса для соотвествующий статусов
  const addActiveStatus = (value)=>{

    Array.from(
      document.querySelector("#topStatusBar").querySelectorAll("a")
    ).forEach((button) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      }
    });

    Array.from(
      document.querySelector("#leftStatus").querySelectorAll("a")
    ).forEach((button) => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
      }
    });

    document
      .querySelectorAll(`[data-value="${value}"]`)
      .forEach((button) => {
        button.classList.add("active");
      });
  }

  // Выбор соотвествующего фильтру продукту после перезагрузки
  const addCurrentProduct = (value)=>{
    document.querySelector('#productSelect').value = value
  }

  return (
    <section className="body--dashboard">
      <NavBar />

      <LeftPanel
        clickStatus={clickStatus}
        countNewRequests={countNewRequests.length}
      />

      {/* <!-- main-wrapper --> */}
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>

          <FormRow chooseProduct={chooseProduct} clickStatus={clickStatus} />

          <TableContent
            updateFlag={props.updateFlag}
            flag={props.flag}
            requests={filteredElements}
          />
        </div>
      </div>
    </section>
  );
}

export default Tables;
