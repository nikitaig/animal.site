import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/card";
import "../components/style.css";
function Poisk() {
  let card = {name:"Гектор", kind:"собака",  district:"Приморский", date:"21.11.23"}
  let card2 = {name:"окуцыим", kind:"соба",  district:"Приморский", date:"21.11.23"}
  let card3 = {name:"Гемакктор", kind:"соба",  district:"Приморский", date:"21.11.23"}
  let card4 = {name:"Гекукмактор", kind:"сока",  district:"", date:"21.11.23"}
  let card5 = {name:"амук", kind:"са",  district:"Приморский", date:"21.11.23"}
  let card6 = {name:"мук", kind:"соба",  district:"Приморский", date:"21.11.23"}
    return (
        <div>
            <Header />
            <main >
            <div class="ots">
  <p class="p" >Потерянные животные</p>
</div>

<hr class="mt-3 mb-4"/>
<div>
<div class="w-50 m-auto " >
<form class="d-flex but" role="search">
    <input class="form-control me-2" type="search" placeholder="Введите название животного" aria-label="Search"/>
  </form>
</div>

<div class="w-50 m-auto " >
  <form class="d-flex but" role="search">
      <input class="form-control me-2" type="search" placeholder="Введите район" aria-label="Search"/>
    </form>
  </div>

  <div class="w-50 m-auto " >
  <div class="d-flex justify-content-center align-items-center" >
        <button class="btn pur w-50"> <p class="butn">Найти</p></button>
    </div>
  </div>
</div>
<hr class="mt-5 mb-4"/>
<div class="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
<Card data={card}/>
<Card data={card2}/>
<Card data={card3}/>
<Card data={card4}/>
<Card data={card5}/>
<Card data={card6}/>
<Card data={card4}/>
<Card data={card5}/>
<Card data={card6}/>
</div>



</main>




            <Footer/>
        </div>
    );
}

export default Poisk;






