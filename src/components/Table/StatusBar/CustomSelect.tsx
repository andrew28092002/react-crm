import React, { FC } from "react";
import { setProdcutCreator } from "../../../store/reducers/requestsReducer/actionCreators";
import { useTypedDispatch } from "../../../store/store";

const CustomSelect: FC = () => {
  const dispatch = useTypedDispatch();

  const chooseProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const product = e.target.value;

    if (product) {
      localStorage.setItem("filter-product", product);

      dispatch(setProdcutCreator(product));
    }
  };

  return (
    <select
      className="custom-select"
      id="productSelect"
      defaultValue={localStorage.getItem("filter-product") || "all"}
      onChange={chooseProduct}
    >
      <option value="all">Все продукты</option>
      <option value="course-html">Курс по верстке</option>
      <option value="course-js">Курс по JavaScript</option>
      <option value="course-vue">Курс по VUE JS</option>
      <option value="course-php">Курс по PHP</option>
      <option value="course-wordpress">Курс по WordPress</option>
    </select>
  );
};

export default CustomSelect;
