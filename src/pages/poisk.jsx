import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/card";
import "../components/style.css";
import React,{useEffect, useState, useRef} from 'react';

const Poisk = () => {

    let [zap, setZap] = useState({});
    let [cards, setCards] = useState([]);
    let blocks = useRef();
    let [pag, setPag] = useState([])
    let [but, setBut] = useState([])
  

    function skai(e) {
        e.preventDefault();

        const forms = document.getElementById('poisk')

        if (!forms.checkValidity()) {
            e.stopPropagation()
            forms.classList.add('was-validated')
            return
        }

        var myHeaders = new Headers();

        var zapOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/search/order?district=" + zap.district + " &kind=" + zap.kind, zapOptions)
            .then(response => response.json())
            .then(result => {
                if (result.data.orders.length > 0) {
                    setPag(result.data.orders.slice(0, 10));
                    let a = [];
                    for (let i = 0; i < result.data.orders.length; i += 10) {
                        a.push(<li className="page-item" key={i + 'list'}><a href="#" className="page-link"
                            onClick={() => setPag(result.data.orders.slice(i, i + 10))}>{(i / 10 + 1)}</a></li>)
                        setBut(a)
                    }

                }
                else {
                    let message = 'Таких объявлений не обнаружено';
                    blocks.current.innerText = message;
                    blocks.current.style.background = "#C76864"
                    blocks.current.style.color = "black";
                    blocks.current.style.border = "1px solid #801818"
                    blocks.current.style.display = 'flex';
                }
            })
            .catch(error => console.log('error', error));

    }



    return (
        <div>
            <Header />
            <main style={{ "minHeight": "73vh" }}>
             <div className="ots">
  <p className="p" >Потерянные животные</p>
</div>

<hr className="mt-3 mb-4"/>

<form noValidate style={{ "margin": "30px auto 0 auto", "minWidth": "300px" }} onSubmit={skai} id='poisk'>
<div>

<div className="w-50 m-auto " >
<form className="d-flex but" role="search">
    <input className="form-control me-2" type="search" placeholder="Введите название животного" aria-label="Search" onChange={(e) => setZap({ ...zap, kind : e.target.value })}/>
  </form>
</div>

<div className="w-50 m-auto " >
  <form className="d-flex but" role="search">
      <input className="form-control me-2" type="search" placeholder="Введите район" aria-label="Search" onChange={(e) => setZap({ ...zap, district: e.target.value })}/>
    </form>
  </div>

  <div className="w-50 m-auto " >
  <div className="d-flex justify-content-center align-items-center" >
        <button type="submit" className="btn pur w-50"> <p className="butn">Найти</p></button>
    </div>
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






