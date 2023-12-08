import React from 'react';
import img from '../images/коргиг.jpg';
const Str = () => {
    return(
        <div>

<div class="d-flex justify-content-center mt-5">
<div class=" border border-warning border-2 rounded p-3 w-75">
    <div class="otsos">
<div class="pho"><img src={img} class="w-100" alt="..." /></div>

<div class="con">
    <div class="mt-4">
<h4> Информация о животном</h4>
    <ul class="list-group list-group-flush w-100">
        <li class="list-group-item">id: 12</li>
        <li class="list-group-item">Вид животного: собака</li>
        <li class="list-group-item">Клеймо: 987T5R</li>
        <li class="list-group-item">Район: Приморский</li>
        <li class="list-group-item">Дата: 01.12.23</li>
    </ul>
</div>
    <div class=" mt-5"> 
    <h4> Информация о Нашедшем</h4>
    <ul class="list-group list-group-flush w-100">
    <li class="list-group-item">Имя: Дмитрий </li>
    <li class="list-group-item">Номер телефона: 89438497546</li>
    <li class="list-group-item">Email: nvsngfqwn3f23n@gmail.com</li>
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