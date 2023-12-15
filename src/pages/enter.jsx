import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
import React,{useState, useRef} from 'react';
import {Link} from "react-router-dom";


const Enter = () => {
  let [user, setUser] = useState();
  let [token, setToken] = useState();

  let blocks = useRef();

  function sign(e) {
      e.preventDefault();

      const forms = document.getElementById('forma')

      if (!forms.checkValidity()) {
          e.stopPropagation()
          forms.classList.add('was-validated')
          return
      }


      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(user);

      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };

      fetch("https://pets.сделай.site/api/login", requestOptions)
          .then(response => response.json())
          .then(result => {
              if ('data' in result) {
                localStorage.token = result.data.token
                setToken(result.data.token)
                  let message = 'Вы вошли в аккаунт';
                  blocks.current.innerText = message;
                  blocks.current.style.background = "#34C924"
                  blocks.current.style.color = "black";
                  blocks.current.style.border = "1px solid rgb(19, 136, 8)";
                  blocks.current.style.display = 'flex';
                  blocks.current.style.justifyContent= 'center';

              }
              else
              {
                  let message = 'Вы ввели неправильный логин или пароль!!!';
        blocks.current.innerText = message;
        blocks.current.style.background = '#C76864';
        blocks.current.style.color = "black";
        blocks.current.style.border = "1px solid #801818"
        blocks.current.style.display = 'flex';
              }})
          .catch(error => console.log('error', error));
  }



    return (
        <div>
            <Header />


            <main className="main d-flex justify-content-center align-items-center m-auto">
            <div>
<div className=" board border-2 rounded p-3">
  <form noValidate onSubmit={sign} id='forma'>
  <h1 className="reg" >Вход</h1>
  <br/>

  <label htmlFor="validationCustom01" className="form-label">Email</label>
                      <input type="email" className="form-control" id="validationCustom01" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
                      <div className="invalid-feedback feed">
                          Введите правильный Mail
                      </div>
                      <label htmlFor="validationCustom02" className="form-label">Пароль</label>
                      <input type="password" pattern='^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{7,}$' className="form-control" id="validationCustom02" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                      <div className="invalid-feedback feed">
                          Латинские буквы обязательно одна заглавная, строчная и цифра, минимум 7 символов
                      </div>
  
  <div id="emailHelp" className="form-text">Мы никогда никому не передадим ваши личные данные.</div>
  <br/>
  <div className="d-flex justify-content-center">
   <button className="btn pur"> <p className="butn">Войти</p></button>
   </div>
  <label htmlFor="exampleInputPassword1" className="form-label d-flex justify-content-center mt-3 mb-3">Или</label>
  <div className="d-flex justify-content-center">
  <Link to={'/registr'}><button className="btn pur"><p className="butn">Зарегистрироваться</p></button></Link>
   </div>
</form>

  </div>

  <div className="alert alert-success mt-3 m-auto text-center " style={{"display":"none"}} role="alert" ref={blocks}></div>
  </div>
</main>


<div className="foot">
            <Footer/>
            </div>
        </div>
    );
}

export default Enter;