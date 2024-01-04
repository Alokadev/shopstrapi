import React from 'react';
import "./Card.scss";
import {Link} from "react-router-dom";

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
    <div className='card'>
        <div className="image">
            {item.isNew && <span>Popular</span>}
            <img src={item.img} alt="" className="mainImg" />
            <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <h2>{item.subtitle}</h2>
        <div className="prices">
            <h3>${item.price} Upwards</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card