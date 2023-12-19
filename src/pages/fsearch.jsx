import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/card";
import "../components/style.css";
import React,{useEffect, useState, useRef} from 'react';

const Fsearch = () => {
    let [zap, setZap] = useState({});
    let [cards, setCards] = useState([]);
    let blocks = useRef();
    let [pag, setPag] = useState([])
    let [but, setBut] = useState([])
  
    
    let [card, setCard]=useState([]);
 

  
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
            <Header />
            <main style={{ "minHeight": "73vh" }}>
             <div className="ots">
  <p className="p" >Потерянные животные</p>
</div>

<hr className="mt-3 mb-4"/>

<form noValidate style={{ "margin": "30px auto 0 auto", "minWidth": "300px" }} role="search" id='poisk'>


<div className="w-50 m-auto " >
  {/* onChange={(e) => setZap({ ...zap, description: e.target.value })} */}
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск" onChange={search}  required  list="pets"/>
  </div>

  <div className="w-50 m-auto mt-5" >
  <div className="d-flex justify-content-center align-items-center" >
        <button type="submit" className="btn pur w-50"> <p className="butn">Найти</p></button>
    </div>
  </div>


</form>

<div className="alert alert-primary w-50 asda mt-3 m-auto" style={{ "display": "none" }} role="alert" ref={blocks}></div>

<hr className="mt-5 mb-4"/>

<div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto justify-content-center">
        {pag.map((item, index) => <Card data={item} key={index} />)}
      </div>
      <br/>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {but}
        </ul>
      </nav>

      <datalist id="pets">
  {card}
 </datalist>

<div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
{cards}
{cards}
</div> 
</main>
            <Footer/>
        </div>
    );
}

export default Fsearch;






