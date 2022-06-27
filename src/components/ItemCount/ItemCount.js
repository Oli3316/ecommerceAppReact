import { Button } from '@mui/material';
import React, { useState } from 'react';

const ItemCount = ({stock, price, onAdd}) => {
 
  const [count, setCount] = useState(1);
  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <span onClick={addCount}>$ {price * count}</span>
      <div className="card-contador">
        <Button onClick={restCount} disabled={count === 1}>
          -
        </Button>
        <p>{count}</p>
        <Button className="botonSumar" onClick={addCount}>
          +
        </Button>
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          onAdd(count);
        }}
      >
        Agregar producto
      </Button>
    </>
  );
};
export default ItemCount;
