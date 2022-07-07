import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../utils/productsMocks';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoading(false);
        resolve(productos.find((prod) => prod.id == id));
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((res) => {
      console.log('respuesta:', res);
      setProduct(res);
    });
  }, []);

  return <>{loading ? <h2>Loading...</h2> : <ItemDetail data={product} />}</>;
};
export default ItemDetailContainer;
