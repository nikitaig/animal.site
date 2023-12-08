import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";
import Card from "../components/card";
import "../components/style.css";

function Main() {
  let card = {name:"Гектор", kind:"собака",  district:"Приморский", date:"21.11.23"}
  let card2 = {name:"окуцыим", kind:"соба",  district:"Приморский", date:"21.11.23"}
  let card3 = {name:"Гемакктор", kind:"соба",  district:"Приморский", date:"21.11.23"}
  let card4 = {name:"Гекукмактор", kind:"сока",  district:"", date:"21.11.23"}
  let card5 = {name:"амук", kind:"са",  district:"Приморский", date:"21.11.23"}
  let card6 = {name:"мук", kind:"соба",  district:"Приморский", date:"21.11.23"}


    return (
        <div>
            <Header />
            <div className="ots">
  <p className="p" >Найденные животные</p>
</div>


<div className="cont m-auto">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
<Slider/>
<Slider/>
<Slider/>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
      </div>





            <div className="ots">
        <p className="p"> Вернулись домой</p>
      </div>



      <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">

<Card data={card}/>
<Card data={card2}/>
<Card data={card3}/>
<Card data={card4}/>
<Card data={card5}/>
<Card data={card6}/>
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