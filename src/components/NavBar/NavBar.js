import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <AppBar position="static" className="header-primary">
      <Toolbar>
        <div className="container-logo">Donatto</div>
        <ul className="navbar">
          <li>
            <Button
              disableRipple
              style={{ backgroundColor: 'transparent' }}
              variant="text"
              className="navbar__btn"
              href="/"
            >
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
          <CartWidget />
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
