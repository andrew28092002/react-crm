import React from "react";

function FormRow(props) {

  const {clickStatus, chooseProduct} = props

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
            <a href="/#" className="btn btn-light" data-value="all" onClick={clickStatus}>
              Все
            </a>
            <a href="/#" className="btn btn-light" data-value="new" onClick={clickStatus}>
              Новые
            </a>
            <a href="/#" className="btn btn-light" data-value="inwork" onClick={clickStatus}>
              В работе
            </a>
            <a href="/#" className="btn btn-light" data-value="complete" onClick={clickStatus}>
              Завершенные
            </a>
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
