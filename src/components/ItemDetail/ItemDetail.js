import ItemCount from '../ItemCount/ItemCount';
import '../Cards/Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ data }) => {
  const sendItemToCart = (qty) => {
    addToCart({ ...data, cantidad: qty });
  };
  const { addToCart, isInCart, deleteItem } = useContext(CartContext);
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
            {isInCart(data.id) ? (
              <Button
                onClick={() => {
                  deleteItem(data.id);
                }}
              >
                Modificar compra
              </Button>
            ) : (
              <ItemCount stock={data.stock} price={data.price} onAdd={sendItemToCart} />
            )}
            {/* <Link to="/Cart">Terminar mi compra</Link> */}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
