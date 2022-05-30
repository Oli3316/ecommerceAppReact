import { Button } from '@mui/material';
import React, { useState } from 'react';

const ItemCount = (prod) => {
  const { stock, price } = prod;
  const [count, setCount] = useState(1);
  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <span onClick="botonSumar">$ {price * count}</span>
      <div className="card-contador">
        <Button onClick={restCount} disabled={count === 0}>
          -
        </Button>
        <p>{count}</p>
        <Button className="botonSumar" onClick={addCount}>
          +
        </Button>
      </div>
    </>
  );
};
export default ItemCount;
