import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../api/mockApi';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader/Loader';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError('Hubo un error al cargar los productos.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const title = categoryId
    ? `Categoría: ${categoryId[0].toUpperCase() + categoryId.slice(1)}`
    : 'Todos nuestros productos';

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className="error-message">{error}</h2>;
  }

  return (
    <div>
      <h1 className="list-title">{title}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;