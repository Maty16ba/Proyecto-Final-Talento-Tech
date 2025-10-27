import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(item, quantity);
  };

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.name} className="detail-image" />
      <div className="detail-content">
        <h2 className="detail-title">{item.name}</h2>
        <p className="detail-price">${item.price}</p>
        <p className="detail-description">{item.description}</p>
        <p className="detail-stock">Stock disponible: {item.stock}</p>

        {quantityAdded > 0 ? (
          <Link to="/cart" className="button">
            Terminar mi compra
          </Link>
        ) : (
          <ItemCount stock={item.stock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;