import ItemCount from '../ItemCount/ItemCount';
import '../Cards/Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ data }) => {
  const [showButton, setShowButton] = useState(false);

  // const addProductToCart = () => {
  //   console.log('PRODUCTO A AGREGAR: ', data);
  //   console.log('CANTIDAD:', data.cantidad);
  // };
  return (
    <>
      <div>
        <Card sx={{ minWidth: 225 }}>
          <CardContent>
            <div className="card-item">
              <div>
                <img src={`/${data.image}`} />
              </div>
              <p>{data.title}</p>
              <p>${data.price}</p>
            </div>
          </CardContent>
          {showButton ? (
            <ItemCount stock={data.stock} price={data.price} setShowButton={setShowButton} />
          ) : (
            <Button>
              <Link to="/Cart">Terminar mi compra</Link>
            </Button>
          )}
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;