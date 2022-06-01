import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detalle from './Pages/Detalle';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    //JSX
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
