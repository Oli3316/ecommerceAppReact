import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../utils/productsMocks';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

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
    getProducts();
    getItem().then((res) => {
      console.log('respuesta:', res);
      setProduct(res);
    });
  }, []);

  const getProducts = async () => {
    const productSnapshot = await getDocs(collection(db, 'productos'));
    console.log('productSnapshot', productSnapshot);
  };
  return <>{loading ? <h2>Loading...</h2> : <ItemDetail data={product} />}</>;
};
export default ItemDetailContainer;
