import React from 'react';
import img from '../images/psina.png';
import "../components/style.css";
import {Link} from "react-router-dom";

const Header = () => {
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
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;