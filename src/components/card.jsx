import React from 'react';
import img from '../images/коргиг.jpg';
const Card = (props) => {
    return(
        <div>
<div className="col">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body ft">
                <div>
              <h5 className="card-title">{props.data.name}</h5>
              <h7 className="card-text">Вид: {props.data.kind}</h7><br/>
              <h7 className="card-text">Район: {props.data.district}</h7><br/>
              <h7 className="card-text">Дата: {props.data.date}</h7></div>
              <div><button className="btn pur mt-3"> <p className="butn">Перейти</p></button></div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Card;