// import CardItem from '../Cards/Cards';
// import { Grid } from '@mui/material';
// import { useState, useEffect } from 'react';

// const producto = {
//   id: 4,
//   title: 'Original',
//   price: 200,
//   image: 'Original.jpg',
//   stock: 15
// };
// const CardList = ({ title }) => {
//   const [products, setProducts] = useState([]);
//   // const productos = [
//   //   {
//   //     id: 1,
//   //     title: 'Queso',
//   //     price: 200,
//   //     image: 'Original.jpg',
//   //     stock: 40,
//   //     category: 'consal'
//   //   },
//   //   {
//   //     id: 2,
//   //     title: 'Chia',
//   //     price: 200,
//   //     image: 'chia.jpg',
//   //     stock: 20,
//   //     category: 'sinsal'
//   //   },
//   //   {
//   //     id: 3,
//   //     title: 'Jamon',
//   //     price: 200,
//   //     image: 'jamon.jpg',
//   //     stock: 12,
//   //     category: 'sinsal'
//   //   },
//   //   {
//   //     id: 4,
//   //     title: 'Original',
//   //     price: 200,
//   //     image: 'Original.jpg',
//   //     stock: 15,
//   //     category: 'consal'
//   //   }
//   // ];

//   const getProducts = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(productos);
//       }, 2000);
//     });
//   };
//   useEffect(() => {
//     getProducts()
//       .then((response) => {
//         setProducts(response);
//       })
//       .catch((err) => {
//         console.log('Fallo la operacion', err);
//       });
//   }, []);
//   return (
//     <>
//       <h2>{title}</h2>
//       <Grid container spacing={4}>
//         {products.map((prod) => {
//           return (
//             <Grid item md={3} key={prod.id}>
//               <CardItem {...prod} />
//             </Grid>
//           );
//         })}
//       </Grid>
//     </>
//   );
// };
// export default CardList;
// export { producto };
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
      //pregunto si existe la categoría si tiene un valor va a devolver true
      //cuando estemos en otra ruta el valor va a ser undefined, por lo tanto
      //devolverá false
      if (category) {
        //Si existe category resuelvo los productos filtrados con la misma categoría que el Param
        resolve(productos.filter((prod) => prod.category === category));
      } else {
        //si no existe resuelvo toda la lista de productos
        resolve(productos);
      }
    });
  };

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
    //por último pongo category en el array de dependencias de useEffect
    //esto hace que cada vez que cambie category useEffect se vuelve a ejecutar
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
