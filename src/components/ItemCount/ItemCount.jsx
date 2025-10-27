import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="count-controls">
        <button onClick={decrement} className="control-button">
          -
        </button>
        <span className="count-display">{count}</span>
        <button onClick={increment} className="control-button">
          +
        </button>
      </div>
      <button
        className="button"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;