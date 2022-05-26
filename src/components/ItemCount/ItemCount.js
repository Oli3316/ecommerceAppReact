import { Button } from '@mui/material';
import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const restCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <span onClick="botonSumar">$ {200 * count}</span>
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
