import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from '../CardList/CardList';
import Loading from '../Loading/Loading';

const CardListContainer = ({ title, productos }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, []);

  return <>{loading ? <Loading /> : <ItemList title={'Productos Destacados'} productos={productos} />}</>;
};

export default CardListContainer;
