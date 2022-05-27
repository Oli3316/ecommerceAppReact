import CardItem from '../Cards/Cards';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';

const CardList = ({ title }) => {
  const [products, setProducts] = useState([]);
  const productos = [
    {
      id: 1,
      title: 'Queso',
      price: 200,
      image: 'Original.jpg'
    },
    {
      id: 2,
      title: 'Chia',
      price: 200,
      image: 'chia.jpg'
    },
    {
      id: 3,
      title: 'Jamon',
      price: 200,
      image: 'jamon.jpg'
    },
    {
      id: 4,
      title: 'Original',
      price: 200,
      image: 'Original.jpg'
    }
  ];

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
    <>
      <h2>{title}</h2>
      <Grid container spacing={4}>
        {products.map((prod) => {
          return (
            <Grid item md={3} key={prod.id}>
              <CardItem title={prod.title} price={prod.price} image={prod.image} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default CardList;
