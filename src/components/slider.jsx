
import img from '../images/коргиг.jpg';

import React from 'react';
const Slider = () => {
    return(
        <div>
<div className="cont m-auto">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..."/>
            <div className='carousel-caption  d-md-block'>
              <h5>Коржик</h5>
              <h5>Корги, 2 года. Потерялся в Красногвардейском районе 29.10.23. Был найден и возвращен домой 31.10.23</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-md-block">
              <h5>Поперечный Семен Петрович</h5>
              <h5> Дворовый пес, 3 года. Убежал со своего двора 22.11.23, и до 29.11.23 находился в неизвестном месте.</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-md-block">
              <h5>Степан</h5>
              <h5>Почтовый голубь 1 год. 23.11.23 вышел на смену, но заблудился. Вернулся в почтовую службу 27.11.23</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
      </div>
        </div>
    );
};

export default Slider;