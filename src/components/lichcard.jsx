import React from 'react';
import img from '../images/коргиг.jpg';
import {Link} from "react-router-dom";

import { useNavigate } from 'react-router-dom';
const LichCard = (props) => {



  function redact(e) {
    e.preventDefault();

    const forms = document.getElementById("redackt" + props.data.id);
    console.log(forms.checkValidity());

    if (!forms.checkValidity()) {
      e.stopPropagation()
      forms.classList.add('was-validated')
      return
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.token);



    var formdata = new FormData(document.getElementById("redackt" + props.data.id));

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/pets/" + props.data.id, requestOptions)
      .then(response => response.json())
      .then(result => {
        if ('data' in result) {
          window.location.reload();
        }
      })
      .catch(error => console.log('error', error));
  }

  const dele = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.token);


    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://pets.сделай.site/api/users/orders/${id}`, requestOptions)
      .then(response => response.status)
      .then(result => {
        console.log(result)
        window.location.reload();
      })

      .catch(error => console.log('error', error));
  }




  const navigate = useNavigate();

    return(
        <div>

<div className="col">
              <div className="card h-100">
                <img src={'https://pets.сделай.site' + props.data.photos} className="card-img-top" alt="..."/>
                <div className="card-body ft">
                  <div>
                  <div className="izmen">
                  <h5 className="card-title">{props.data.name}</h5>
                  <h5 className="yetxt">{props.data.stat}</h5>
                </div>
                <div className="pik">
                <p className="card-text">Вид: {props.data.kind}</p>
              <p className="card-text">Район: {props.data.district}</p>
              <p className="card-text">Дата: {props.data.date}</p>
              </div>
                </div>
                <div className="izmen mt-3"> <div> <button onClick={() => {navigate("/strone", { state: props.data.id })}} className="btn pur"><p className="butn">Перейти</p></button></div>
  <button className="btn pur" data-bs-toggle="modal" data-bs-target={'#izme'+props.data.id}> <p className="butn">Редактировать</p></button>
                </div>
                </div>
              </div>
            </div>


            <div className="modal fade" id={"izme"+props.data.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Личные данные</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div className="modal-body">
        
                  <form className=" board border-2 rounded p-3  mt-3"  id={'redackt' + props.data.id} onSubmit={redact}>
                    <h1 className="reg" >Редактирование объявления</h1>    
                <hr className="mt-4 mb-4"/>
                <h4 className="reg" >Данные найденного животного</h4>
                
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Клеймо</label>
                  <input type="text" className="form-control " id="exampleInputEmail1"  name='mark'/>
                </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Добавьте фото (обязательно)</label>
                        <input className="form-control" type="file" id="formFile" name='photos1'/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Добавьте фото</label>
                        <input className="form-control" type="file" id="formFile" name='photos2'/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Добавьте фото</label>
                        <input className="form-control" type="file" id="formFile" name='photos3'/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Описание</label>
                        <input type="text" className="form-control " id="exampleInputEmail1" name='description'/>
                      </div>
                        <br/>
                        <button className="btn pur" type="submit" ><p className="butn">Сохранить</p></button>
                
                </form>
        
                </div>
                <div className="modal-footer otsos">
                  <div><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#del"+props.data.id}>Удалить объявление</button></div>
                 <div> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button></div>
                </div>
              </div>
            </div>
          </div>





          <div className="modal fade" id={"del"+props.data.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Удаление объявления</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div className="modal-body">
                Вы уверены, что хотите удалить объявление ? 
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                  <button type="button" className="btn btn-danger" onClick={() => dele(props.data.id)} data-bs-dismiss="modal">Удалить</button>
                </div>
              </div>
            </div>
          </div>



        </div>
    );
};

export default LichCard;