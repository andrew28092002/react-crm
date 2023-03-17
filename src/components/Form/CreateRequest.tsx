import React, { ChangeEvent, useState } from "react";
import { TNewRequest, TRequest } from "../../models/request";

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

const initalRequestState = {
  name: "",
  phone: "",
  email: "",
  product: "none",
};

function FormRequest() {
  const [isPending, setIsPending] = useState(false);
  const [requestInfo, setRequestInfo] = useState<TNewRequest>({
    ...initalRequestState,
  });

  // Получение текущей даты
  const getCurrentDate = () => {
    const date = new Date();

    return date.toLocaleDateString();
  };

  // Очистка формы
  const clearForm = () => {
    setIsPending(false);
    setRequestInfo({
      ...initalRequestState
    });
  };

  // Отправка формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Добавление в state измененных значений формы
  const changeInfo = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.target.value.length > 1) {
      setRequestInfo((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
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
            defaultValue={requestInfo[label.name]}
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
          {/* Инпуты */}
          {formInputLabels}

          <div className="form-group">
            {/* Кнопка выключается, если отправить заявку на время отправления данных */}
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
