import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
function Registr() {
    return (
        <div>
            <Header />
            <main class="main d-flex justify-content-center align-items-center m-auto ">

<form class=" border border-warning border-2 rounded p-3 ">
    <h1 class="reg" >Регистрация</h1>
    <br/>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Ваше имя</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

    <div class="mb-3 gor">
      <div>
        <label for="exampleInputEmail1" class="form-label">Ваш город</label>
        <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div>
        <label for="exampleInputEmail1" class="form-label">Ваш адрес</label>
        <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
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


  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Пароль</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Подтвердите пароль</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Соглашаюсь на обработку моих данных</label>
  </div>  
  <div id="emailHelp" class="form-text">Мы никогда никому не передадим ваши личные данные.</div>
  <br/>
  <button type="submit" class="btn btn-warning">Зарегистрироваться</button>

</form>
</main>

<div class="foot">
            <Footer/>
            </div>
        </div>
    );
}

export default Registr;