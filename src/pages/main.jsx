import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";
import Card from "../components/card";
import "../components/style.css";
function Main() {
    return (
        <div>
            <Header />
            <div className="ots">
  <p className="p" >Найденные животные</p>
</div>
            <Slider/>
            <div className="ots">
        <p className="p"> Вернулись домой</p>
      </div>



      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
        </div>

        <div className="ots">
        <p className="p"> Оставьте почту для рассылки новых обьявлений</p>
      </div>
      <form className="w-50 m-auto p-3" style={{"minWidth": "300px"}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
        </div>
        <button className="btn pur"> <p className="butn">Подписаться</p></button>
        </form>

            <Footer/>
        </div>
    );
}

export default Main;