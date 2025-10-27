import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1>Bienvenido a RetroByte</h1>
      <p style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
        Tu tienda de confianza para tecnología de otra época.
      </p>
      <Link to="/category/computadoras" className="button">
        Ver Productos
      </Link>
    </div>
  );
};

export default Home;