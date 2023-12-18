import React from 'react';
const Str = (props) => {
    return(
        <div>

<div className="d-flex justify-content-center mt-5">
<div className="  board border-2 rounded p-3 w-75">
    <div className="otsos">
<div className="pho"><img src={'https://pets.сделай.site' + props.data.photos1} className="w-100" alt="..." /></div>

<div className="con">
    <div className="mt-4">
<h4> Информация о животном</h4>
    <ul className="list-group list-group-flush w-100">
        <li className="list-group-item">id: {props.data.id}</li>
        <li className="list-group-item">Вид животного: {props.data.kind}</li>
        <li className="list-group-item">Клеймо: {props.data.kleimo}</li>
        <li className="list-group-item">Район: {props.data.district}</li>
        <li className="list-group-item">Дата: {props.data.date}</li>
    </ul>
</div>
    <div className=" mt-5"> 
    <h4> Информация о Нашедшем</h4>
    <ul className="list-group list-group-flush w-100">
    <li className="list-group-item">Имя: {props.data.name} </li>
    <li className="list-group-item">Номер телефона: {props.data.number}</li>
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