import Footer from "../components/footer";
import Header from "../components/header";
import LichCard from "../components/lichcard";
import img from '../images/макарр.png';
import img1 from '../images/VK.png';
import img2 from '../images/аська.png';
import img3 from '../images/moodle.jfif';
import izm from '../images/измена.png';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import "../components/style.css";

const Lich = () => {


  let [user, setUser] = useState({});
  let [day, setDay] = useState(0);
  let history = useNavigate();
  let [cards, setCards] = useState([]);

  const load = () => {

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + localStorage.token);

      var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
      };

      fetch("https://pets.сделай.site/api/users", requestOptions)
          .then(response => response.json())
          .then(result => {
              if ('name' in result) {
                  setUser(result);

                  let a = new Date();
                  a.getDate();
                  let b = new Date(user.registrationDate);
                  let c = Math.floor((a - b) / 1000 / 3600 / 24)
                  setDay(c);
              }
              else {
                  history('/Enter');
              }
          }
          )
          .catch(error => console.log('error', error));

  }
  useEffect(load, []);

  const loadCards = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/users/orders", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result);
            if (result.data.orders.length > 0)
            {
                
                setCards(result.data.orders)
            }
        })
        .catch(error => console.log('error', error));
}
useEffect(loadCards, []);


  let block = useRef();
  let blocks = useRef();

  function sendPhone(e) {
      e.preventDefault();

      const forms = document.getElementById('phone')

      if (!forms.checkValidity()) {
          e.stopPropagation()
          forms.classList.add('was-validated')
          return
      }

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + localStorage.token);

      var raw = JSON.stringify(user);

      var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };

      fetch("https://pets.сделай.site/api/users/phone", requestOptions)
          .then(response => response.status)
          .then(result => {
              if (result == 200) {
                  let message = 'Номер успешно изменен';
                  blocks.current.innerText = message;
                  blocks.current.style.background = "#D6D6FF"
                  blocks.current.style.color = "black";
                  blocks.current.style.border = "1px solid rgb(119, 119, 255)"
                  blocks.current.style.display = 'flex';
              }
          })
          .catch(error => console.log('error', error));
  }

  function sendEmail(e) {
      e.preventDefault();

      const forms = document.getElementById('email')

      if (!forms.checkValidity()) {
          e.stopPropagation()
          forms.classList.add('was-validated')
          return
      }

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer " + localStorage.token);
      var raw = JSON.stringify(user);

      var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };

      fetch("https://pets.сделай.site/api/users/email", requestOptions)
          .then(response => response.status)
          .then(result => {
              if (result == 200) {
                  let message = 'Почта успешно изменена';
                  block.current.innerText = message;
                  block.current.style.background = "#D6D6FF"
                  block.current.style.color = "black";
                  block.current.style.border = "1px solid rgb(119, 119, 255)"
                  block.current.style.display = 'flex';
              }
          })
          .catch(error => console.log('error', error));
  }

  function exit() {
      localStorage.clear();
      history('/Enter');
  }





    return (
        <div>
            <Header />
            <main style={{"backgroundColor": "#f4f5f7"}}>
        <div className="ots">
            <p className="p" >Личный кабинет</p>
          </div>
        <section className="vh-70">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                  <div className="card mb-3" style={{"borderRadius": ".5rem"}}>
                    <div className="row g-0">
                      <div className="col-md-4 gradient-custom text-center text-white"
                        style={{"borderTopLeftRadius": ".5rem", "borderBottomLeftRadius": ".5rem"}}>
                        <img src={img}
                          alt="Avatar" className="img-fluid my-5" style={{"width": "80px"}}/>
                        <h5>{user.name}</h5>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-4">
                            <div className="izmen">
                          <h4>Личные данные</h4>
                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exit">Выйти из аккаунта</button>




  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Личные данные</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div className="modal-body">

            <form className=" needs-validation  board border-2 rounded p-3 "  noValidate id='email' onSubmit={sendEmail}>
                <h1 className="reg" >Редактирование</h1>
                <br/>
            
                  <div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Ваша почта</label>
                    <input type="email" className="form-control" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                  </div>
                  <div className="invalid-feedback">
                                        Укажите корректный email
                                    </div>
              <br/>
              <button  className="btn pur" type="submit"><p className="butn">Сохранить изменения</p></button>
            </form>
            <div className="alert alert-primary none" style={{ "display": "none" }} role="alert" ref={block}></div>
        </div>
        <div className="modal-footer otstup">
         <div> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button></div>
        </div>
      </div>
    </div>
  </div>


  <div className="modal fade" id="stat" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Личные данные</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div className="modal-body">

            <form className="needs-validation  board border-2 rounded p-3 " noValidate id='phone' onSubmit={sendPhone}>
                <h3 className="reg" >Редактирование</h3>
                <br/>
            
                  <div>
                    <label htmlFor="exampleInputEmail1" className="form-label">Ваш номер</label>
                    <input type="text" pattern='^[\d\+]{12}$' className="form-control" required onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                    </div>
                  <div className="invalid-feedback">
                                        Введите номер телефона, используйте + и цифры
                                    </div>
              <br/>
              <button  className="btn pur" type="submit"><p className="butn">Сохранить изменения</p></button>
            </form>

            <div className="alert alert-primary none" style={{ "display": "none" }} role="alert" ref={blocks}></div>
        </div>
        <div className="modal-footer otstup">
         <div> <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button></div>
        </div>
      </div>
    </div>
  </div>


  <div className="modal fade" id="exit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Выход из аккаунта</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div className="modal-body">
        Вы уверены, что хотите выйти? 
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <button type="button" className="btn btn-danger" onClick={exit} data-bs-dismiss="modal" >Выйти</button>
        </div>
      </div>
    </div>
  </div>





                          </div>
                          <br/>
                          <hr className="mt-0 mb-4"/>
                           
                            <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <div className="fiz">
                            <h6 className="ml">Email</h6>
                            <img src={izm} className="iz" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  />
                            </div>

                              <p className="text-muted">{user.email}</p>
                            </div> 
                         
                            <div className="col-6 mb-3">
                            <div className="fiz">
                            <h6 className="ml">Phone</h6>
                            <img src={izm} className="iz" data-bs-toggle="modal" data-bs-target="#stat"/>
                            </div>
                              <p className="text-muted">{user.phone}</p>
                            </div>  
                            </div>           
                            <div className="row pt-1">
                              <div className="col-6 mb-3">
                                <h6>Дата регистрации</h6>
                                {/* <p className="text-muted">{lich.data}</p> */}
                                <p className="text-muted">{user.registrationDate}</p>

                              </div> 
                              <div className="col-6 mb-3">
                                <h6>Колво дней</h6>
                                <p className="text-muted">{day}</p>
                              </div>  
                              </div> 

                          <div className="otstup">
                            <a href="#!"><img src={img1} className="vk" alt="..."/></a>
                            <a href="#!"><img src={img3} className="mood" alt="..."/></a>
                            <a href="#!"><img src={img2} className="vk" alt="..."/></a>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <div className="ots">
            <p className="p" >Найденные животные</p>
          </div>



          <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
            {cards.map((item, index) => <LichCard data={item} key={index} />)}
            </div>










            <hr className="mt-0 mb-4 mt-5"/>
          <div className="fr">       
          <div className=" d-flex justify-content-center">
            <div className="mb-3">
            <h6>Колво обьявлений</h6>
            {/* <p className="text-muted">{lich.kolvoob}</p> */}
            <p className="text-muted">{user.orderCount}</p> 
          </div>  
        </div>      
          <div className=" d-flex justify-content-center">
            <div className="mb-3">
            <h6>Колво найденных хозяев</h6>
            {/* <p className="text-muted">{lich.kolvohoz}</p> */}
            <p className="text-muted">{user.petsCount}</p> 
          </div>
        </div>
        </div> 




            </main>
            <Footer/>
        </div>
    );
}

export default Lich;