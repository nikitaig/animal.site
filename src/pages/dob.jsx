
import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
import React,{useRef} from 'react';
const Dob = () => {

  let blocks = useRef();

  function dobav(e) {
    e.preventDefault();

  var formdata = new FormData(document.getElementById("dob"));

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://pets.сделай.site/api/pets", requestOptions)
.then(response => response.status)
.then(result => {
  console.log(result);
    if (result==200) {
        let message = 'Вы успешно выложили объявление!!!';
        blocks.current.innerText = message;
        blocks.current.style.background = "#34C924"
        blocks.current.style.color = "black";
        blocks.current.style.border = "1px solid rgb(19, 136, 8)"
        blocks.current.style.display = 'flex';
    }})


  .catch(error => console.log('error', error));
  }




    return (
        <div>
            <Header />


            <main className="main d-flex justify-content-center align-items-center m-auto ">

<form className=" board border-2 rounded p-3 mt-3" id="dob" noValidate onSubmit={dob}>
    <h1 className="reg" >Добавление объявления</h1>    
<hr className="mt-4 mb-4"/>
<h4 className="reg" >Данные найденного животного</h4>


<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Вид животного</label>
  <input type="text" className="form-control " id="exampleInputEmail1" />
</div>
<div className="mb-3">
  <label htmlFor="exampleInputEmail3" className="form-label">Район</label>
  <input type="text" className="form-control " id="exampleInputEmail3"/>
</div>
<div className="mb-3 mt-3">
  <label htmlFor="exampleInputEmail4" className="form-label">Дата</label>
  <input type="date" className="form-control " id="exampleInputEmail4" />
</div>
<div className="mb-3 mt-3">
  <label htmlFor="exampleInputEmail5" className="form-label">Клеймо</label>
  <input type="text" className="form-control " id="exampleInputEmail5" />
</div>

    <div className="mb-3">
        <label htmlFor="formFile1" className="form-label">Добавьте фото (обязательно)</label>
        <input className="form-control" type="file" id="formFile1"/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFile2" className="form-label">Добавьте фото</label>
        <input className="form-control" type="file" id="formFile2"/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFile3" className="form-label">Добавьте фото</label>
        <input className="form-control" type="file" id="formFile3"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail8" className="form-label">Описание</label>
        <input type="text" className="form-control " id="exampleInputEmail8" />
      </div>

      <hr className="mt-5 mb-4"/>
      <h4 className="reg" >Данные пользователя</h4>
    <div className="mb-3 mt-3">
      <label htmlFor="exampleInputEmail6" className="form-label">Ваше имя</label>
      <input type="text" className="form-control" id="exampleInputEmail6" />
    </div>
  
    <div className="mb-3 gor">
      <div>
        <label htmlFor="exampleInputEmail7" className="form-label">Ваша почта</label>
        <input type="email" className="form-control " id="exampleInputEmail7" />
      </div>
      <div>
        <label htmlFor="exampleInputEmail9" className="form-label">Ваш номер</label>
        <input type="text" className="form-control " id="exampleInputEmail9"/>
      </div>
    </div>


      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" >
              Хотите зарегистрироваться?
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword10" className="form-label">Пароль</label>
                <input type="password" className="form-control" id="exampleInputPassword10"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">Подтвердите пароль</label>
                <input type="password" className="form-control" id="exampleInputPassword2"/>
              </div>  
           </div>
        </div>
      </div>
    </div>
        <br/>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Соглашаюсь на обработку моих данных</label>
  </div>  
  <div id="emailHelp" className="form-text">Мы никогда никому не передадим ваши личные данные.</div>
  <br/>
  <button className="btn pur"> <p className="butn">Опубликовать</p></button>

</form>
</main>

            <Footer/>
        </div>
    );
}

export default Dob;