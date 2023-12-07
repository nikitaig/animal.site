import React from 'react';
import img from '../images/коргиг.jpg';
const Card = () => {
    return(
        <div>

<div className="col">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body ft">
                <div>
              <h5 className="card-title">Гектор</h5>
              <h7 className="card-text">Вид: собака</h7><br/>
              <h7 className="card-text">Район: Приморский</h7><br/>
              <h7 className="card-text">Дата: 21.11.23</h7></div>
              <div><button className="btn pur mt-3"> <p className="butn">Перейти</p></button></div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Card;