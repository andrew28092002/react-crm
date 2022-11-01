import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditRequest() {
  const [requestInfo, setRequestInfo] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    status: "",
    date: "",
    id: "",
  });
  const navigate = useNavigate()
  const { id } = useParams();
  const url = "https://crm-server.glitch.me/requests/" + id;

  // Получение и запись в state текущей задачи
  const getCurrentRequest = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRequestInfo({ ...data });
      })
      .catch((err) =>{
        console.log(err)
      })
  };
  
  // Получение текущей заявки при загрузке страницы
  useEffect(() => {
    getCurrentRequest();
  }, []);


  // Отправление измененных данных
  const submitForm = (e) => {
    e.preventDefault()
    const controller = new AbortController()
    const signal = controller.signal
    
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestInfo),
      
    };

   fetch(url, requestOptions, {signal})
    .then( ()=> navigate('/requests'))
    .catch((err) => {
      if (err === 'AbortError'){
        console.log('fetch aborted')
      }
      console.log(err)
    })

    return ()=> {
      controller.abort()
    }

  };

  // Запись в state измененных данных
  const changeInfo = (e) => {
    if (e.target.value.length > 1){
      setRequestInfo( prev => {
        return {
          ...prev,
          [e.target.name]: e.target.value
        }
      })
    }

  }

  return (
    <div className="form-wrapper">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <div className="admin-heading-1">Работа с заявкой</div>
          </div>
          <div className="col text-right">
            <Link to="/requests" className="btn btn-link">
              Вернуться назад
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <form id="form" >
              <div className="card mb-4">
                <div className="card-header">Данные о заявке</div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>ID:</strong>
                    </div>
                    <div className="col">
                      Заявка №<span id="number">{requestInfo.id}</span>
                    </div>
                    <input name="id" type="hidden" id="id" />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Дата создания:</strong>
                    </div>
                    <div className="col" id="date">
                      {requestInfo.date}
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Продукт:</strong>
                    </div>
                    <div className="col">
                      <select
                        id="product"
                        name="product"
                        className="custom-select"
                        value={requestInfo.product}
                        onChange={changeInfo}
                      >
                        <option value="course-html">Курс по верстке</option>
                        <option value="course-js">Курс по JavaScript</option>
                        <option value="course-vue">Курс по VUE JS</option>
                        <option value="course-php">Курс по PHP</option>
                        <option value="course-wordpress">
                          Курс по WordPress
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Имя:</strong>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        value={requestInfo.name}
                        id="name"
                        name="name"
                        onChange={changeInfo}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Email:</strong>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        value={requestInfo.email}
                        id="email"
                        name="email"
                        onChange={changeInfo}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Телефон:</strong>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        value={requestInfo.phone}
                        id="phone"
                        name="phone"
                        onChange={changeInfo}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Статус заявки:</strong>
                    </div>
                    <div className="col">
                      <select
                        defaultValue={requestInfo.status}
                        className="custom-select"
                        id="status"
                        name="status"
                        onChange={changeInfo}
                      >

                        <option value="new">Новая</option>
                        <option value="inwork">В работе</option>
                        <option value="complete">Завершена</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="col text-right">
                  <button
                    id="info-submit"
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitForm}
                  >
                    Сохранить изменения
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditRequest