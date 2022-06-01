import ItemDetail from '../ItemDetail/ItemDetail';
import { producto } from '../CardList/CardList';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
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
      <div>Item detalle</div>
      <Grid container spacing={0}>
        <ItemDetail data={product} />
      </Grid>
    </>
  );
};
export default ItemDetailContainer;
