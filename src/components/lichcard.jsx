import React from 'react';
import img from '../images/коргиг.jpg';
const LichCard = () => {
    return(
        <div>

<div className="col">
              <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body ft">
                  <div>
                  <div className="izmen">
                  <h5 className="card-title">Card title</h5>
                  <h5 className="yetxt">onModeration</h5>
                </div>
                  <h7 className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h7>
                </div>
                <div className="izmen mt-3"><button type="button" className="btn btn-outline-warning">Перейти</button>
                  <button className="btn pur" data-bs-toggle="modal" data-bs-target="#izme"> <p className="butn">Редактировать</p></button>
                </div>
                </div>
              </div>
            </div>


            <div class="modal fade" id="izme" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Личные данные</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
        
                  <form class=" board border-2 rounded p-3  mt-3">
                    <h1 class="reg" >Редактирование объявления</h1>    
                <hr class="mt-4 mb-4"/>
                <h4 class="reg" >Данные найденного животного</h4>
                
                <div class="mb-3 mt-3">
                  <label for="exampleInputEmail1" class="form-label">Вид животного</label>
                  <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Клеймо</label>
                  <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Добавьте фото (обязательно)</label>
                        <input class="form-control" type="file" id="formFile"/>
                      </div>
                      <div class="mb-3">
                        <label for="formFile" class="form-label">Добавьте фото</label>
                        <input class="form-control" type="file" id="formFile"/>
                      </div>
                      <div class="mb-3">
                        <label for="formFile" class="form-label">Добавьте фото</label>
                        <input class="form-control" type="file" id="formFile"/>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Описание</label>
                        <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      </div>
                        <br/>
                        <button class="btn pur"><p class="butn">Сохранить</p></button>
                
                </form>
        
                </div>
                <div class="modal-footer otsos">
                  <div><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#del">Удалить объявление</button></div>
                 <div> <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button></div>
                </div>
              </div>
            </div>
          </div>





          <div class="modal fade" id="del" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Удаление объявления</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                </div>
                <div class="modal-body">
                Вы уверены, что хотите удалить объявление? 
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                  <button type="button" class="btn btn-danger" >Удалить</button>
                </div>
              </div>
            </div>
          </div>



        </div>
    );
};

export default LichCard;