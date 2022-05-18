import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
const NavBar = () => {
  return (
    <AppBar position="static" className="header-primary">
      <Toolbar>
        <div className="container-logo">Donatto</div>
        <ul className="navbar">
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant="text" className="navbar__btn">
              Inicio
            </Button>
          </li>
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant="text" className="navbar__btn">
              Nosotros
            </Button>
          </li>
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant="text" className="navbar__btn">
              Productos
            </Button>
          </li>
          <li>
            <Button disableRipple style={{ backgroundColor: 'transparent' }} variant="text" className="navbar__btn">
              Contacto
            </Button>
          </li>
          <Button disableRipple style={{ backgroundColor: 'transparent' }} variant="text" className="navbar__btn">
            <ShoppingCartIcon className="iconos" />
          </Button>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
