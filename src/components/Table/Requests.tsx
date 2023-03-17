import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TRequest } from "../../models/request";

const reverseProduct: any = {
  "course-vue": "Курс по VUE JS",
  "course-php": "Курс по PHP",
  "course-js": "Курс по JavaScript",
  "course-html": "Курс по верстке",
  "course-wordpress": "Курс по WordPress",
};

const badges: any= {
  new: "badge-danger",
  inwork: "badge-warning",
  complete: "badge-success",
};

const reverseStatus: any = {
  new: "Новая",
  inwork: "В работе",
  complete: "Завершена",
};

type Props = {
  updateFlag: () => void,
  requests: TRequest[]
}

const Requests: FC<Props> = ({ updateFlag, requests }) => {
  // Удаление заявки
  const deleteRequest = (id: number) => {
    const url = "https://crm-server.glitch.me/requests/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then(() => {
        updateFlag();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const requestsList = requests.map((request) => {
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
            onClick={() => deleteRequest(request.id)}
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

export default Requests;
