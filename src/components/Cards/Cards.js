import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const CardItem = ({ image, title, price }) => {
  return (
    <Card sx={{ minWidth: 225 }}>
      <CardContent>
        <div className="card-item">
          <div>
            <img src={`./${image}`} />
          </div>
          <p>{title}</p>
          <ItemCount />
          <Button variant={'contained'}>Detalle</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
