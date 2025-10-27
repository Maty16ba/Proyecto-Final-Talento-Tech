import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  return (
    <article className="item-card">
      <img src={product.img} alt={product.name} className="item-image" />
      <div className="item-content">
        <h3 className="item-title">{product.name}</h3>
        <p className="item-price">${product.price}</p>
        <Link to={`/item/${product.id}`} className="button">
          Ver Detalle
        </Link>
      </div>
    </article>
  );
};

export default Item;