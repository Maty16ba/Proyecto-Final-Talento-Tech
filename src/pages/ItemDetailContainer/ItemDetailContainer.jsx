import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/mockApi';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loader from '../../components/Loader/Loader';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductById(itemId)
      .then((data) => {
        setItem(data);
      })
      .catch((err) => {
        setError('El producto no existe.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 style={{ textAlign: 'center', color: 'red' }}>{error}</h2>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;