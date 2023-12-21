import Footer from "../components/footer";
import Header from "../components/header";
import "../components/style.css";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";



const Strone = (props) => {

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




    return (
        <div>
            <Header />

            <div className="d-flex justify-content-center mt-5">
<div className="  board border-2 rounded p-3 w-75">
    <div className="otstup">
<div className="pho" style={{'max-width': "500px", 'max-height': "500px"}} ><img src={'https://pets.сделай.site' + card.photos1} className="w-100" style={{ 'max-height': "500px"}}alt="..." /></div>

<div className="con">
    <div className="mt-4">
<h4> Информация о животном</h4>
    <ul className="list-group list-group-flush w-100">
        <li className="list-group-item">id: {card.id}</li>
        <li className="list-group-item">Вид животного: {card.kind}</li>
        <li className="list-group-item">Клеймо: {card.mark}</li>
        <li className="list-group-item">Район: {card.district}</li>
        <li className="list-group-item">Дата: {card.date}</li>
        
    <li className="list-group-item">Описание:{card.description}</li>
    </ul>
</div>
    <div className=" mt-5"> 
    <h4> Информация о Нашедшем</h4>
    <ul className="list-group list-group-flush w-100">
    <li className="list-group-item">Имя: {card.name} </li>
    <li className="list-group-item">Номер телефона: {card.phone}</li>
    <li className="list-group-item">Email: {card.email}</li>
</ul>
</div>
</div>
</div>
</div>

</div>






<div className="foot">
            <Footer/>
            </div>
        </div>
    );
}

export default Strone;