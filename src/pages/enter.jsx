import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
function Enter() {
    return (
        <div>
            <Header />


            <main class="main d-flex justify-content-center align-items-center m-auto">

<form class=" board border-2 rounded p-3">
  <h1 class="reg" >Вход</h1>
  <br/>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Пароль</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div id="emailHelp" class="form-text">Мы никогда никому не передадим ваши личные данные.</div>
  <br/>
  <button class="btn pur"> <p class="butn">Войти</p></button>
  <br/>
  <label for="exampleInputPassword1" class="form-label d-flex justify-content-center mt-3 mb-3">Или</label>
  <br/>
  <button onclick="location.href='enter.html'" class="btn pur"><p class="butn">Зарегистрироваться</p></button>
</form>
</main>


<div class="foot">
            <Footer/>
            </div>
        </div>
    );
}

export default Enter;