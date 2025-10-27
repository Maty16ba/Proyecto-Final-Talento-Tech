import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1>¡Gracias por tu compra!</h1>
      <p style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
        Tu pedido ha sido procesado con éxito.
      </p>
      <Link to="/" className="button">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Checkout;