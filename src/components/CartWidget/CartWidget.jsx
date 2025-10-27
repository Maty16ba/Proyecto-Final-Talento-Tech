import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link to="/cart" className="cart-widget">
      <span>🛒</span>
      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
    </Link>
  );
};

export default CartWidget;