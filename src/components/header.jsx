import React from 'react';
import img from '../images/psina.png';
import "../components/style.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary cvet" >
      <div class="container-fluid">
        <Link to ={'/'} class="logo"><img src={img} class="log"/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <Link to ={'/poisk'} class="nav-link active" style={{"color":"black", "font-size": "large"}} >Поиск животных</Link>
            </li>
                        
            <li class="nav-item">
              <Link to ={'/dob'} class="nav-link active" style={{"color":"black", "font-size": "large"}} >Добавить объявление</Link>
            </li>

            <li class="nav-item">
              <Link to ={'/lich'} class="nav-link active"  style={{"color":"black", "font-size": "large"}} >Личный кабинет</Link>
            </li>

            <li class="nav-item">
              <Link to ={'/enter'} class="nav-link active" style={{"color":"black", "font-size": "large"}}  >Вход</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;