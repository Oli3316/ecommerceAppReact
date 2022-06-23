import ItemCount from '../ItemCount/ItemCount';
import '../Cards/Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ data }) => {
  const sendItemToCart = () => {
    addToCart(data);
  };
  const {addToCart} = useContext(CartContext);
  return (
    <>
      <div>
        <Card sx={{ minWidth: 225 }}>
          <CardContent>
            <Button onClick={sendItemToCart}>Agregar</Button>
            <div className="card-item">
              <div>
                <img src={`/${data.image}`} />
              </div>
              <p>{data.title}</p>
              <p>${data.price}</p>
            </div>
            <ItemCount stock={data.stock} price={data.price} />
            <Link to="/Cart">Terminar mi compra</Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
