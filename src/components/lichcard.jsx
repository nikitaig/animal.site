import React from 'react';
import img from '../images/коргиг.jpg';
import {Link} from "react-router-dom";
const LichCard = (props) => {
    return(
        <div>

<div className="col">
              <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
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
                <div className="izmen mt-3">  <Link to={'/strone'}><button className="btn pur "><p className="butn">Перейти</p></button></Link>
  <button className="btn pur" data-bs-toggle="modal" data-bs-target="#izme"> <p className="butn">Редактировать</p></button>
                </div>
                </div>
              </div>
            </div>


            <div className="modal fade" id="izme" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Личные данные</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div className="modal-body">
        
                  <form className=" board border-2 rounded p-3  mt-3">
                    <h1 className="reg" >Редактирование объявления</h1>    
                <hr className="mt-4 mb-4"/>
                <h4 className="reg" >Данные найденного животного</h4>
                
                <div className="mb-3 mt-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Вид животного</label>
                  <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Клеймо</label>
                  <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Добавьте фото (обязательно)</label>
                        <input className="form-control" type="file" id="formFile"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Добавьте фото</label>
                        <input className="form-control" type="file" id="formFile"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Добавьте фото</label>
                        <input className="form-control" type="file" id="formFile"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Описание</label>
                        <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      </div>
                        <br/>
                        <button className="btn pur"><p className="butn">Сохранить</p></button>
                
                </form>
        
                </div>
                <div className="modal-footer otsos">
                  <div><button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#del">Удалить объявление</button></div>
                 <div> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button></div>
                </div>
              </div>
            </div>
          </div>





          <div className="modal fade" id="del" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Удаление объявления</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div className="modal-body">
                Вы уверены, что хотите удалить объявление? 
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                  <button type="button" className="btn btn-danger" >Удалить</button>
                </div>
              </div>
            </div>
          </div>



        </div>
    );
};

export default LichCard;