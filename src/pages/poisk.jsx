import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
import React,{useEffect, useState, useRef} from 'react';
import Searchhh from "../components/searchhh";
import { useParams } from "react-router-dom";

import Card from "../components/card";

const Poisk = () => {
  let [cards, setCards]=useState([])

const load=()=>{
   console.log(query.query)
   if (query.query=='false') return;
  
   fetch(`https://pets.сделай.site/api/search?query=${query.query}`)
   .then(response => response.json())
   .then(result => {
       console.log(result);
       
       console.log(card)
        setCards(result.data.orders.map((data, index)=><Card data={data} key={'card'+index}/>))
    
console.log(cards)
   })
   .catch(error => console.log('error', error));

  
}

  const [card, setCard] = useState({ data: { orders: [] } })
  useEffect(load, [])
let query=useParams()



    return (
        <div>
            <Header />
            <main style={{ "minHeight": "73vh" }}>
             <div className="ots">
  <p className="p" >Потерянные животные</p>
</div>

<hr className="mt-3 mb-4"/>

<Searchhh/>

<div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
{cards}
</div> 

</main>
            <Footer/>
        </div>
    );
}

export default Poisk;






