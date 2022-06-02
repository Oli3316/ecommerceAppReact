import ItemCount from '../ItemCount/ItemCount';
import '../Cards/Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
const ItemDetail = ({ data }) => {
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <div className="card-item">
          <div>
            <img src={`/${data.image}`} />
          </div>
          <p>{data.title}</p>
          <p>${data.price}</p>
        </div>
        <ItemCount stock={data.stock} price={data.price} />
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
