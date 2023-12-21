
import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
import React,{useRef} from 'react';

const Dob = () => {

  let blocks = useRef();

  function dob(e) {
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
    }})


  .catch(error => console.log('error', error));
  }




    return (
        <div>
            <Header />


            <main className="main d-flex justify-content-center align-items-center m-auto ">
<div>
  <div className=" board border-2 rounded p-3 mt-3">
<form  id="dob" noValidate onSubmit={dob}>
    <h1 className="reg" >Добавление объявления</h1>    
<hr className="mt-4 mb-4"/>
<h4 className="reg" >Данные найденного животного</h4>


<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Вид животного</label>
  <input type="text" className="form-control " id="inputVid" pattern='^[А-Яа-яёЁ\s\-]+$' required  name="kind"/>
</div>

<div className="mb-3">
  <label htmlFor="exampleInputEmail3" className="form-label">Район</label>
  <input type="text" className="form-control " id="inputDis" pattern='^[А-Яа-яёЁ\s\-]+$' required  name="district" />
</div>
<div className="mb-3 mt-3">
  <label htmlFor="exampleInputEmail4" className="form-label">Дата</label>
  <input type="date" className="form-control " id="inputData" required  name="date" />
</div>
<div className="mb-3 mt-3">
  <label htmlFor="exampleInputEmail5" className="form-label">Клеймо</label>
  <input type="text" className="form-control " id="inputMark" required  name="mark" />
</div>

    <div className="mb-3">
        <label htmlFor="formFile1" className="form-label">Добавьте фото (обязательно)</label>
        <input className="form-control" type="file" id="inputPhoto1" required name="photos1" accept="image/png"/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFile2" className="form-label">Добавьте фото</label>
        <input className="form-control" type="file" id="inputPhoto2"  name="photos2" accept="image/png"/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFile3" className="form-label">Добавьте фото</label>
        <input className="form-control" type="file" id="inputPhoto3"  name="photos3" accept="image/png"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail8" className="form-label">Описание</label>
        <input type="text" className="form-control " id="inputDescr" pattern='^[А-Яа-яёЁ\s\-]+$' required name="description" />
      </div>

      <hr className="mt-5 mb-4"/>
      <h4 className="reg" >Данные пользователя</h4>
    <div className="mb-3 mt-3">
      <label htmlFor="exampleInputEmail6" className="form-label">Ваше имя</label>
      <input type="text" className="form-control" id="inputname" pattern='^[А-Яа-яёЁ\s\-]+$' required name="name"/>
    </div>
  
    <div className="mb-3 gor">
      <div>
        <label htmlFor="exampleInputEmail7" className="form-label">Ваша почта</label>
        <input type="email" className="form-control " id="inputEmail" required name="email" />
      </div>
      <div>
        <label htmlFor="exampleInputEmail9" className="form-label">Ваш номер</label>
        <input type="text" className="form-control " id="inputPhone" required pattern='^[\d\+]{12}$' name="phone"/>
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
                <input type="password" className="form-control" id="exampleInputPassword10" pattern='^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{7,}$' required name="password"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">Подтвердите пароль</label>
                <input type="password" className="form-control" id="exampleInputPassword2" pattern='^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{7,}$' required name="password_confirmation"/>
              </div>  
           </div>
        </div>
      </div>
    </div>
        <br/>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="gridCheck" name="confirm"/>
    <label className="form-check-label" htmlFor="exampleCheck1" >Соглашаюсь на обработку моих данных</label>
  </div>  
  <div id="emailHelp" className="form-text">Мы никогда никому не передадим ваши личные данные.</div>
  <br/>
  <button className="btn pur" type="submit"> <p className="butn">Опубликовать</p></button>

</form>
    </div>
  <div className="alert alert-primary w-75 asda mt-3 m-auto text-center" style={{"display":"none"}} role="alert" ref={blocks}></div>

  </div>
</main>

            <Footer/>
        </div>
    );
}

export default Dob;