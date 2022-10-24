import React from "react";
import { Link } from "react-router-dom";

function TableContent(props) {

  const reverseProduct = {
    "course-vue": "Курс по VUE JS",
    "course-php": "Курс по PHP",
    "course-js": "Курс по JavaScript",
    "course-html": "Курс по верстке",
    "course-wordpress": "Курс по WordPress",
  };

  const badges = {
    new: "badge-danger",
    inwork: "badge-warning",
    complete: "badge-success",
  };

  const reverseStatus = {
    new: "Новая",
    inwork: "В работе",
    complete: "Завершена",
  };

  // Удаление заявки
  const deleteRequest = (id, callback) => {

    const url = "https://crm-server.glitch.me/requests/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then(() => {
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const requestsList = props.requests.map((request) => {
    return (
      <tr key={request.id}>
        <th scope="row">{request.id}</th>
        <td>{request.date}</td>
        <td>{reverseProduct[request.product]}</td>
        <td>{request.name}</td>
        <td>{request.email}</td>
        <td>{request.phone}</td>
        <td>
          <div className={`badge badge-pill ${badges[request.status]}`}>
            {reverseStatus[request.status]}
          </div>
        </td>
        <td>
          <Link to={`/edit/${request.id}`}>
            <button className="btn btn-primary">Редактировать</button>
          </Link>
        </td>
        <td>
          <button
            onClick={(id, callback) =>
              deleteRequest(request.id, props.updateFlag)
            }
            className="btn btn-outline-danger"
          >
            Удалить
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table fs-14">
      <thead>
        <tr>
          <th>ID</th>
          <th>дата</th>
          <th>продукт</th>
          <th>имя</th>
          <th>email</th>
          <th>телефон</th>
          <th>статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tbody">{requestsList}</tbody>
    </table>
  );
}

export default TableContent;
