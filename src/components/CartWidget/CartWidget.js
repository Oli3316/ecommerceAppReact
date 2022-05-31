import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const iconoCarrito = () => {
  return (
    <>
      <Button disableRipple style={{ backgroundColor: 'transparent' }} variant="text" className="navbar__btn">
        <ShoppingCartIcon className="iconos" />
      </Button>
    </>
  );
};

export default iconoCarrito;
