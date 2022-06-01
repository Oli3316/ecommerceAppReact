import CardItem from '../Cards/Cards';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';

const producto = {
  id: 4,
  title: 'Original',
  price: 200,
  image: 'Original.jpg',
  stock: 15
};
const CardList = ({ title }) => {
  const [products, setProducts] = useState([]);
  const productos = [
    {
      id: 1,
      title: 'Queso',
      price: 200,
      image: 'Original.jpg',
      stock: 40
    },
    {
      id: 2,
      title: 'Chia',
      price: 200,
      image: 'chia.jpg',
      stock: 20
    },
    {
      id: 3,
      title: 'Jamon',
      price: 200,
      image: 'jamon.jpg',
      stock: 12
    },
    {
      id: 4,
      title: 'Original',
      price: 200,
      image: 'Original.jpg',
      stock: 15
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
              <CardItem {...prod} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default CardList;
export { producto };
