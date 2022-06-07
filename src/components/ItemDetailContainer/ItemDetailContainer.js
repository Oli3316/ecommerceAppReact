import ItemDetail from '../ItemDetail/ItemDetail';
import { producto } from '../../utils/productsMocks';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((res) => {
      console.log('respuesta:', res);
      setProduct(res);
    });
  }, []);
  return (
    <>
      <ItemDetail data={product} />
    </>
  );
};
export default ItemDetailContainer;
