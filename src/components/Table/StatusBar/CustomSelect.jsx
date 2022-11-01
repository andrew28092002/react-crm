import React from 'react'

function CustomSelect({chooseProduct}) {
  return (
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
  )
}

export default CustomSelect