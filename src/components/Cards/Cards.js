import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
// import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CardItem = (prod) => {
  const { image, stock, price, title, id } = prod;
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <div className="card-item">
          <div>
            <img src={`/${image}`} />
          </div>
          <p>{title}</p>
          {/* <ItemCount stock={stock} price={price} /> */}
          <Link variant={'contained'} to={'/product/' + id}>
            Detalle
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
