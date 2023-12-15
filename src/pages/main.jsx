import Footer from "../components/footer";
import React,{useEffect, useState, useRef} from 'react';
import Header from "../components/header";
import Slider from "../components/slider";
import Card from "../components/card";
import "../components/style.css";

const Main=() => {

  // let message = useRef();
  // let message1 = useRef();
  let [email, setEmail]=useState();
  let blocks = useRef();

  function sign(e) {
    e.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(email);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://pets.сделай.site/api/subscription", requestOptions)
  .then(response => response.status)
.then(result => {
  console.log(result);
  if (result==204) {
     let message = 'Вы успешно подписались на рассылку!';
     blocks.current.innerText = message;
     blocks.current.style.background = " rgb(154, 211, 116)"
     blocks.current.style.color = "black";
     blocks.current.style.border = "1px solid rgb(19, 136, 8)"
     blocks.current.style.display = 'flex';
     blocks.current.style.margin = 'auto';

    // message.current.style.display = "block";
    // message1.current.style.display = "none";

}
else
{
     let message = 'Вы ввели неправильную почту!!!';
 blocks.current.innerText = message;
 blocks.current.style.background = 'rgb(216, 128, 128)';
 blocks.current.style.color = "black";
 blocks.current.style.border = "1px solid #801818"
 blocks.current.style.display = 'flex';

// message1.current.style.display = "block";
// message.current.style.display = "none";
}})
    .catch(error => console.log('error', error));
  }





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
            <div className="ots">
  <p className="p" >Найденные животные</p>
</div>

<Slider />



            <div className="ots">
        <p className="p"> Вернулись домой</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 align-items-stretch g-4 w-75 m-auto">
{cards}
        </div>

        <div className="ots">
        <p className="p"> Оставьте почту для рассылки новых обьявлений</p>
      </div>
      <form className="w-50 m-auto p-3" style={{"minWidth": "300px"}} id="podpis" noValidate onSubmit={sign}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  required onChange={(e) => setEmail({email: e.target.value})}/>
          <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
        </div>
        <button className="btn pur"> <p className="butn">Подписаться</p></button>
        </form>
        <div className="alert alert-success w-50 m-auto text-center " style={{"display":"none"}} role="alert" ref={blocks}></div>
            <Footer/>
        </div>
    );
}

export default Main;