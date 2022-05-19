import CardItem from '../Cards/Cards';
import { Grid } from '@mui/material';

const CardList = ({ title }) => {
  const productos = [
    {
      title: 'Queso',
      price: 1500,
      image: 'DonattoQueso.jpg'
    },
    {
      title: 'Chia',
      price: 1500,
      image: 'chia.jpg'
    },
    {
      title: 'Jamon',
      price: 1500,
      image: 'jamon.jpg'
    }
  ];
  return (
    <>
      <h2>{title}</h2>
      <Grid container>
        <Grid item md={3}>
          <CardItem title={'Lino'} price={200} image={'Lino.jpg'} />
        </Grid>
        <Grid item md={3}>
          <CardItem title={'Original'} price={200} image={'Original.jpg'} />
        </Grid>
        <Grid item md={3}>
          <CardItem title={'Original (Sin Sal)'} price={200} image={'Original.jpg'} />
        </Grid>
        <Grid item md={3}>
          <CardItem title={'Remolacha'} price={200} image={'Lino.jpg'} />
        </Grid>
        <Grid item md={3}>
          <CardItem title={'Jamon'} price={200} image={'jamon.jpg'} />
        </Grid>
        <Grid item md={3}>
          <CardItem title={'Queso'} price={200} image={'jamon.jpg'} />
        </Grid>
        <Grid item md={3}>
          <CardItem title={'Mix De Semillas'} price={200} image={'Original.jpg'} />
        </Grid>
        <Grid item md={3}>
          <CardItem title={'Espinaca'} price={200} image={'Lino.jpg'} />
        </Grid>
      </Grid>
    </>
  );
};

export default CardList;
