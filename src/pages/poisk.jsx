import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/card";
import "../components/style.css";
import React,{useEffect, useState, useRef} from 'react';
function Poisk() {



  let [email, setEmail]=useState();
  let blocks = useRef();
  let [card, setCard]=useState({data:{orders:[]}});
  useEffect(()=>req_card(card, setCard),[]);
  function req_card(card, setCard) {   

  
    fetch("https://pets.сделай.site/api/pets")
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setCard(result)
       
    })
      .catch(error => console.log('error', error));
    
    }
    let  cards=card.data.orders.map((order, index)=>{
  return<Card data={order}/>;        
    })












    return (
        <div>
            <Header />
            <main >
            <div className="ots">
  <p className="p" >Потерянные животные</p>
</div>

<hr className="mt-3 mb-4"/>
<div>
<div className="w-50 m-auto " >
<form className="d-flex but" role="search">
    <input className="form-control me-2" type="search" placeholder="Введите название животного" aria-label="Search"/>
  </form>
</div>

<div className="w-50 m-auto " >
  <form className="d-flex but" role="search">
      <input className="form-control me-2" type="search" placeholder="Введите район" aria-label="Search"/>
    </form>
  </div>

  <div className="w-50 m-auto " >
  <div className="d-flex justify-content-center align-items-center" >
        <button className="btn pur w-50"> <p className="butn">Найти</p></button>
    </div>
  </div>
</div>
<hr className="mt-5 mb-4"/>
<div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
{cards}
{cards}

</div>



</main>




            <Footer/>
        </div>
    );
}

export default Poisk;






