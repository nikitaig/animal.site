import React from 'react';
import img from '../images/fon.jpg';
const Header = () => {
    return(
        <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="logo" href="практик.html"><img src= {img} className="log"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pin" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="poisk.html">Поиск животных</a>
            </li>
                        
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="new.html">Добавить объявление</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="pc.html">Личный кабинет</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="prob.html">Вход</a>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Header;