import CardList from '../components/CardList/CardList';
import productos from '../utils/productsMocks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  console.log('Categoria:', category);
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {
        console.log('Fallo la operacion', err);
      });
  }, []);

  return (
    <div className="general-container">
      <CardList title={'Productos Sin Sal'} productos={products.category} />
    </div>
  );
};

export default ProductList;
