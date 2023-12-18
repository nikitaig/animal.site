
import React,{useEffect, useState, useRef} from 'react';
import img from '../images/psina.png';
import "../components/style.css";
import {Link} from "react-router-dom";
import Card from "../components/card";

const Header = () => {


  let [card, setCard]=useState([]);
 

 /* let  cards=.description.map((order, index)=>{
    return< card.data.orders.description data={order}/>;        
      })*/

let [query, setQuery]=useState('');

const send=()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://pets.сделай.site/api/search?query="+query, requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)
      
      
      let data=result.data.orders.map((item)=>item.description)
      let set=new Set(data)
      let uniq=Array.from(set)
     
      data=uniq.map((value, index)=><option value={value} key={value}></option>)
      
      
      setCard(data)
        console.log(card)
      })
      
      
    
    .catch(error => console.log('error', error));
}

const search = (e) => {
setQuery(e.target.value)

if (query.length>2) setTimeout(send, 1000);
}




  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary cvet" >
      <div className="container-fluid">
        <Link to ={'/'} className="logo"><img src={img} className="log" alt="..."/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to ={'/poisk'} className="nav-link active" style={{"color":"black", "fontSize": "large"}} >Поиск животных</Link>
            </li>
                        
            <li className="nav-item">
              <Link to ={'/dob'} className="nav-link active" style={{"color":"black", "fontSize": "large"}} >Добавить объявление</Link>
            </li>

            <li className="nav-item">
              <Link to ={'/lich'} className="nav-link active"  style={{"color":"black", "fontSize": "large"}} >Личный кабинет</Link>
            </li>

            <li className="nav-item">
              <Link to ={'/enter'} className="nav-link active" style={{"color":"black", "fontSize": "large"}}  >Вход</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" onChange={search} list="pets"/>
        <button class="btn btn-outline-success" type="submit">Поиск</button>
      </form>

 <datalist id="pets">
  {card}
 </datalist>

        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;