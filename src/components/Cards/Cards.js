import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import React, { useState } from 'react';

const CardItem = ({ image, title, price }) => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
    if (count === 1) {
    }
  };
  const restCount = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <div className="card-item">
          <div>
            <img src={`./${image}`} />
          </div>
          <p>{title}</p>
          <span onClick="botonSumar">$ {price + price * count}</span>
          <div className="card-contador">
            <Button onClick={restCount}>-</Button>
            <p>{count}</p>
            <Button className="botonSumar" onClick={addCount}>
              +
            </Button>
          </div>
          <Button variant={'contained'}>Detalle</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
