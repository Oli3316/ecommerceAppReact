import CardItem from '../Cards/Cards';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import productos from '../../utils/productsMocks';
import { useParams } from 'react-router-dom';

const CardList = ({ title }) => {
  const [products, setProducts] = useState([]);

  //llamo a la categoría
  const { category } = useParams();
  console.log(category);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (category) {
        resolve(productos.filter((prod) => prod.category === category));
      } else {
        resolve(productos);
      }
    });
  };

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, [category]);

  console.log(products);
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
