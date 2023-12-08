
import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
function Dob() {
    return (
        <div>
            <Header />


            <main class="main d-flex justify-content-center align-items-center m-auto ">

<form class=" board border-2 rounded p-3 mt-3">
    <h1 class="reg" >Добавление объявления</h1>    
<hr class="mt-4 mb-4"/>
<h4 class="reg" >Данные найденного животного</h4>


<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Вид животного</label>
  <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Район</label>
  <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div class="mb-3 mt-3">
  <label for="exampleInputEmail1" class="form-label">Дата</label>
  <input type="date" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div class="mb-3 mt-3">
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

      <hr class="mt-5 mb-4"/>
      <h4 class="reg" >Данные пользователя</h4>
    <div class="mb-3 mt-3">
      <label for="exampleInputEmail1" class="form-label">Ваше имя</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
  
    <div class="mb-3 gor">
      <div>
        <label for="exampleInputEmail1" class="form-label">Ваша почта</label>
        <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div>
        <label for="exampleInputEmail1" class="form-label">Ваш номер</label>
        <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
    </div>


      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" 
            aria-controls="flush-collapseOne">
              Хотите зарегистрироваться?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Подтвердите пароль</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>  
           </div>
        </div>
      </div>
    </div>
        <br/>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Соглашаюсь на обработку моих данных</label>
  </div>  
  <div id="emailHelp" class="form-text">Мы никогда никому не передадим ваши личные данные.</div>
  <br/>
  <button class="btn pur"> <p class="butn">Опубликовать</p></button>

</form>
</main>

            <Footer/>
        </div>
    );
}

export default Dob;