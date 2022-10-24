import React, { useEffect, useState } from "react";
import testRequests from "../../test-data";

function FormRequest() {
  const [isPending, setIsPending] = useState(false);
  const [requestInfo, setRequestInfo] = useState({
    name: "",
    phone: "",
    email: "",
    product: "none",
  });

  // Тестовые данные 
  const insertTestData = () => {
    const randomNum = Math.floor(Math.random() * testRequests.length);
    const { name, email, phone, product } = testRequests[randomNum];

    document.querySelector("#name").value = name;
    document.querySelector("#phone").value = phone;
    document.querySelector("#email").value = email;
    document.querySelector("#product").value = product;

    setRequestInfo({
      name: name,
      phone: phone,
      email: email,
      product: product,
    });
  };

  // Загрузка тестовых данных при первом рендеренге 
  useEffect(() => {
    insertTestData();
  }, []);

  // Получение текущей даты
  const getCurrentDate = () => {
    const date = new Date();

    return date.toLocaleDateString();
  };

  // Очистка формы
  const clearForm = () => {
    setIsPending(false);
    setRequestInfo({
      name: "",
      phone: "",
      email: "",
      product: "none",
    });
  };

  // Отправка формы
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    const currentRequest = {
      ...requestInfo,
      date: getCurrentDate(),
      status: "new",
    };

    fetch("https://crm-server.glitch.me/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentRequest),
    })
      .then(() => {
        clearForm();
        insertTestData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Поля формы
  const formLabels = [
    {
      id: "name",
      type: "text",
      name: "name",
      placeholder: "Имя и Фамилия",
    },
    {
      id: "phone",
      type: "text",
      name: "phone",
      placeholder: "Телефон",
    },
    {
      id: "email",
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    { id: "product", name: "product" },
  ];

  // Добавление в state измененных значений формы
  const changeInfo = (e) => {
    if (e.target.value.length > 1) {
      setRequestInfo((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }

    return (e) => changeInfo(e)
  };

  // Элементы формы
  const formInputLabels = formLabels.map((label) => {
    if (label.name !== "product") {
      return (
        <div className="form-group" key={label.id}>
          <input
            id={label.id}
            type={label.type}
            name={label.name}
            className="form-control"
            placeholder={label.placeholder}
            onChange={changeInfo}
          />
        </div>
      );
    } else if (label.name === "product") {
      return (
        <div className="form-group" key={label.id}>
          <label>Продукт:</label>
          <select
            name={label.name}
            className="form-control"
            id={label.id}
            onChange={changeInfo}
            defaultValue="none"
          >
            <option value="none" disabled>
              Выбрать
            </option>
            <option value="course-html">Курс по верстке</option>
            <option value="course-js">Курс по JavaScript</option>
            <option value="course-vue">Курс по VUE JS</option>
            <option value="course-php">Курс по PHP</option>
            <option value="course-wordpress">Курс по WordPress</option>
          </select>
        </div>
      );
    }
  });

  return (
    <div className="white-plate white-plate--payment">
      <div className="container-fluid">
        <div className="white-plate__header text-center">
          <p className="white-plate__logo">
            <span>Форма</span> заявок
          </p>
        </div>

        <div className="white-plate__line-between white-plate__line-between--main"></div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          id="form"
          method="POST"
          action=""
        >
          {formInputLabels}

          <div className="form-group">
            {isPending && (
              <button
                disabled
                type="submit"
                className="btn btn-lg btn-secondary btn-block"
              >
                Обработка
              </button>
            )}

            {!isPending && (
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Оформить заявку
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRequest;
