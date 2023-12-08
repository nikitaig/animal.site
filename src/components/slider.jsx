
import img from '../images/коргиг.jpg';

import React from 'react';
const Slider = () => {
    return(
        <div>
          <div class="carousel-item active">
            <img src={img} class="d-block w-100" alt="..."/>
            <div class='carousel-caption  d-md-block'>
              <h5>Коржик</h5>
              <h5>Корги, 2 года. Потерялся в Красногвардейском районе 29.10.23. Был найден и возвращен домой 31.10.23</h5>
            </div>
          </div>
        </div>
    );
};

export default Slider;