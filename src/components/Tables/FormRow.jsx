import React from "react";
import LinkTable from "./LinkTable";

function FormRow({ chooseProduct,clickStatus , buttons}) {

  const rowButtons = buttons.map((button) => {
    return (
      <LinkTable
        key={button.value}
        href="/#"
        classAttr={`btn btn-light ${
          button.value === localStorage.getItem('filter-status') ? "active": ""
        }`}
        dataValue={button.value}
        onClick={clickStatus}
      >
        {button.descr}
      </LinkTable>
    );
  });

  return (
    <form action="">
      <div className="row mb-3 justify-content-start">
        <div className="col">
          <div
            id="topStatusBar"
            className="btn-group"
            role="group"
            aria-label="..."
          >
            {rowButtons}
          </div>
        </div>

        <div className="col">
          <select
            className="custom-select"
            id="productSelect"
            defaultValue="all"
            onChange={chooseProduct}
          >
            <option value="all">Все продукты</option>
            <option value="course-html">Курс по верстке</option>
            <option value="course-js">Курс по JavaScript</option>
            <option value="course-vue">Курс по VUE JS</option>
            <option value="course-php">Курс по PHP</option>
            <option value="course-wordpress">Курс по WordPress</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default FormRow;
