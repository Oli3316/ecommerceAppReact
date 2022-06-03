import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detalle from './Pages/Detalle';
import NotFound from './Pages/NotFound';
import Contacto from './Pages/Contacto';
import ProductList from './Pages/ProductList';
// import { ThemeProvider } from './context/ThemeContext';
import Nosotros from './Pages/Nosotros';

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
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
