import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detalle from './Pages/Detalle';
import NotFound from './Pages/NotFound';
import Contacto from './Pages/Contacto';
// import ProductList from './Pages/ProductList';
import CardList from './components/CardList/CardList';
// import { ThemeProvider } from './context/ThemeContext';
import Nosotros from './Pages/Nosotros';
import ProductListWithSalt from './Pages/ProductListWithSalt';

function App() {
  return (
    //JSX
    <div className="App">
      {/* <ThemeProvider> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/contact" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detalle />} />
          <Route path="/products/:category" element={<CardList />} />
          {/* <Route path="/productos/:consal" element={<ProductListWithSalt />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
