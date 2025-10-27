import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>Parece que todavía no has agregado nada.</p>
        <Link to="/" className="button">
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Resumen de tu compra</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price}</p>
            </div>
            <div className="cart-item-actions">
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)} className="remove-button">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice()}</h3>
        <div className="cart-summary-actions">
          <button onClick={clearCart} className="button clear-button">
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="button">
            Proceder al Pago
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;