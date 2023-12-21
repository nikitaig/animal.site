import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "../components/style.css";
const Str = (props) => {

    const location = useLocation();
    const [card, setCard] = useState([]);



    const request = () => {
        var myHeaders = new Headers();
  
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
  
        fetch(`https://pets.сделай.site/api/pets/${location.state}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(location.state);
                console.log(result);
                if ('data' in result) {
                    setCard(result.data.pet);
                }
  
            })
            .catch(error => console.log('error', error));
    }
    useEffect(request, []);






    return(
        <div>

<div className="d-flex justify-content-center mt-5">
<div className="  board border-2 rounded p-3 w-75">
    <div className="otstup">
<div className="pho"><img src={'https://pets.сделай.site' + props.data.photos1} className="w-100"  alt="..." /></div>

<div className="con">
    <div className="mt-4">
<h4> Информация о животном</h4>
    <ul className="list-group list-group-flush w-100">
        <li className="list-group-item">id: {card.id}</li>
        <li className="list-group-item">Вид животного: {card.kind}</li>
        <li className="list-group-item">Клеймо: {card.mark}</li>
        <li className="list-group-item">Район: {card.district}</li>
        <li className="list-group-item">Дата: {card.date}</li>
    </ul>
</div>
    <div className=" mt-5"> 
    <h4> Информация о Нашедшем</h4>
    <ul className="list-group list-group-flush w-100">
    <li className="list-group-item">Имя: {props.data.name} </li>
    <li className="list-group-item">Номер телефона: {props.data.phone}</li>
    <li className="list-group-item">Email: {props.data.email}</li>
</ul>
</div>
</div>
</div>
</div>

</div>
        </div>
    );
};

export default Str;