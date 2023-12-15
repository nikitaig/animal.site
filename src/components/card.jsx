import React from 'react';
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    
      <div className="col ">
        <div className="card h-100">
          <img src={'https://pets.сделай.site' + props.data.photos} className="card-img-top hoto" alt="..." />
          <div className="card-body ft">
            <div >
              <h5 className="card-title">{props.data.name}</h5>
              <p className="card-text">Вид: {props.data.kind}.</p>
              <p className="card-text">Район:{props.data.district}</p>
              <p className="card-text">Дата:{props.data.date}</p>
            </div>
            <div className='mt-3'>
              <Link to={'/strone'}><button className="btn pur"><p className="butn">Перейти</p></button></Link></div>
          </div>
        </div>
      </div>




   
  );
};

export default Card;