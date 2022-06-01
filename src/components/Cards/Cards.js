import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const CardItem = (prod) => {
  const { image, stock, price, title } = prod;
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <div className="card-item">
          <div>
            <img src={image} />
          </div>
          <p>{title}</p>
          <ItemCount stock={stock} price={price} />
          <Button variant={'contained'}>Detalle</Button>
        </div>
      </CardContent>
      <Modal />
    </Card>
  );
};

export default CardItem;
