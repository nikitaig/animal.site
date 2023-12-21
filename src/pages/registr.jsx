import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
import React, { useRef, useState } from 'react';

const  Registr= () => {



  let [user, setUser] = useState({ password: "" });
  let blocks = useRef();

  function reg(e) {
    e.preventDefault();

    const forms = document.getElementById('registration')

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

    fetch("https://pets.сделай.site/api/register", requestOptions)
      .then(response => response.status)
      .then(result => {
        console.log(result);
        if (result == 204) {
          let message = 'Вы успешно зарегистрировались!!!';
          blocks.current.innerText = message;
          blocks.current.style.background = "#34C924"
          blocks.current.style.color = "black";
          blocks.current.style.border = "1px solid rgb(19, 136, 8)"
          blocks.current.style.display = 'flex';
          blocks.current.style.justifyContent= 'center';
        }
        else
        {
            let message = 'Вы ввели неправильные данные!!!';
  blocks.current.innerText = message;
  blocks.current.style.background = '#C76864';
  blocks.current.style.color = "black";
  blocks.current.style.border = "1px solid #801818"
  blocks.current.style.display = 'flex';
  blocks.current.style.justifyContent= 'center';
        }
      })


      .catch(error => console.log('error', error));
  }




    return (
        <div>
            <Header />
            <main className="main d-flex justify-content-center align-items-center m-auto ">
<div>

<div className=" board border-2 rounded p-3">
<form  noValidate onSubmit={reg} id='registration'>
    <h1 className="reg" >Регистрация</h1>
    <br/>

  <div className="mb-3">
    <label htmlFor="InputFIO" className="form-label">Ваше имя</label>
    <input type="text" className="form-control" id="InputFIO"  placeholder="Фамилия Имя Отчество" pattern='^[А-Яа-яёЁ\s\-]+$' required onChange={(e) => setUser({ ...user, name: e.target.value })} />
  </div>
  <div className="invalid-feedback">
            Введите имя используя кириллицу, пробелы и тире
          </div>

    <div className="mb-3 gor">
      <div>
        <label htmlFor="InputEmail" className="form-label">Ваша почта</label>
        <input type="email" className="form-control " id="InputEmail" placeholder="Почта" required onChange={(e) => setUser({ ...user, email: e.target.value })}/>
      </div>
      <div className="invalid-feedback">
            Введите номер телефона использвуя + и цифры без пробела
          </div>
      <div>
        <label htmlFor="InputNum" className="form-label">Ваш номер</label>
        <input type="text" className="form-control " id="InputNum" pattern='^[\d\+]{12}$' required onChange={(e) => setUser({ ...user, phone: e.target.value })}/>
      </div>
    </div>


  <div className="mb-3">
    <label htmlFor="InputPassword1" className="form-label">Пароль</label>
    <input type="password" className="form-control" id="InputPassword1" placeholder="Пароль" pattern='^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{7,}$' required onChange={(e) => setUser({ ...user, password: e.target.value })}/>
  </div>

  <div className="invalid-feedback">
            Латинские буквы обязательно одна заглавная, строчная и цифра, минимум 7 символов
          </div>

  <div className="mb-3">
    <label htmlFor="InputPassword2" className="form-label">Подтвердите пароль</label>
    <input type="password" className="form-control" id="InputPassword2" placeholder="Пароль" pattern='^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{7,}$' required onChange={(e) => setUser({ ...user, password_confirmation: e.target.value })}/>
  </div>

  <div className="invalid-feedback">
            Латинские буквы обязательно одна заглавная, строчная и цифра, минимум 7 символов
          </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="Check1" required onChange={(e) => setUser({ ...user, confirm: e.target.value })}/>
    <label className="form-check-label" htmlFor="Check1">Соглашаюсь на обработку моих данных</label>
  </div>  
  <div id="emailHelp" className="form-text">Мы никогда никому не передадим ваши личные данные.</div>
  <br/>
  <button className="btn pur"><p className="butn">Зарегистрироваться</p></button>
 
</form>
</div>
<div className="alert alert-primary w-75 asda mt-3 m-auto text-center" style={{ "display": "none" }} role="alert" ref={blocks}></div>
</div>
</main>

<div className="foot">
            <Footer/>
            </div>
        </div>
    );
}

export default Registr;