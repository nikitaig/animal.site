import Footer from "../components/footer";
import Header from "../components/header";
import LichCard from "../components/lichcard";
import img from '../images/макарр.png';

import "../components/style.css";
function Lich() {
    return (
        <div>
            <Header />
            <main style={{"background-color": "#f4f5f7"}}>
        <div class="ots">
            <p class="p" >Личный кабинет</p>
          </div>
        <section class="vh-70">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-6 mb-4 mb-lg-0">
                  <div class="card mb-3" style={{"border-radius": ".5rem"}}>
                    <div class="row g-0">
                      <div class="col-md-4 gradient-custom text-center text-white"
                        style={{"border-top-left-radius": ".5rem", "border-bottom-left-radius": ".5rem"}}>
                        <img src={img}
                          alt="Avatar" class="img-fluid my-5" style={{"width": "80px"}}/>
                        <h5>Илья Макаров</h5>
                        <p>Русич, богатырь</p>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-4">
                            <div class="izmen">
                          <h4>Личные данные</h4>
<button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Изменить
  </button>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Личные данные</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">

            <form class=" board border-2 rounded p-3 ">
                <h1 class="reg" >Редактирование</h1>
                <br/>
            
                
                  <div>
                    <label for="exampleInputEmail1" class="form-label">Ваш город</label>
                    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> <br/>
                  <div>
                    <label for="exampleInputEmail1" class="form-label">Ваш адрес</label>
                    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <br/>
                  <div>
                    <label for="exampleInputEmail1" class="form-label">Ваша почта</label>
                    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div> <br/>
                  <div>
                    <label for="exampleInputEmail1" class="form-label">Ваш номер</label>
                    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
              <br/>
              <button  class="btn pur"><p class="butn">Сохранить изменения</p></button>
            </form>

        </div>
        <div class="modal-footer otsos">
          <div><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exit">Выйти из аккаунта</button></div>
         <div> <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button></div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Выход из аккаунта</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div class="modal-body">
        Вы уверены, что хотите выйти? 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <button type="button" class="btn btn-danger" >Выйти</button>
        </div>
      </div>
    </div>
  </div>





                          </div>
                          <br/>
                          <hr class="mt-0 mb-4"/>
                           
                            <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <h6>Email</h6>
                              <p class="text-muted">info@example.com</p>
                            </div> 
                            <div class="col-6 mb-3">
                              <h6>Phone</h6>
                              <p class="text-muted">123 456 789</p>
                            </div>  
                            </div>           
                            <div class="row pt-1">
                              <div class="col-6 mb-3">
                                <h6>Дата регистрации</h6>
                                <p class="text-muted">12.09.2003</p>
                              </div> 
                              <div class="col-6 mb-3">
                                <h6>Колво дней</h6>
                                <p class="text-muted">1569</p>
                              </div>  
                              </div> 

                          <h5>Местонахождение</h5>
                          <hr class="mt-0 mb-4"/>
                          <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <h6>Город</h6>
                              <p class="text-muted">СПб</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Адрес</h6>
                              <p class="text-muted">ПКГХ</p>
                            </div>
                          </div>

                          <div class="otsos">
                            <a href="#!"><img src="VK.png" class="vk"/></a>
                            <a href="#!"><img src="moodle.jfif" class="mood "/></a>
                            <a href="#!"><img src="аська.png" class="vk"/></a>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <div class="ots">
            <p class="p" >Найденные животные</p>
          </div>

          <div class="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
          <LichCard />
          <LichCard />
          <LichCard />
          <LichCard />
            </div>

            <hr class="mt-0 mb-4 mt-5"/>
          <div class="fr">       
          <div class=" d-flex justify-content-center">
            <div class="mb-3">
            <h6>Колво обьявлений</h6>
            <p class="text-muted">19</p>
          </div>  
        </div>      
          <div class=" d-flex justify-content-center">
            <div class="mb-3">
            <h6>Колво найденных хозяев</h6>
            <p class="text-muted">12</p>
          </div>
        </div>
        </div> 




            </main>
            <Footer/>
        </div>
    );
}

export default Lich;