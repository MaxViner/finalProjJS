import React from 'react';
import ProductPage from './components/products';
import RandomImagesPage from './components/RandomImagesPage/RandomImagesPage'
import { BrowserRouter, Route, Link , Routes} from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
    <ul>
    <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/collection">Просмотренные фото</Link>
          </li>
          
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<RandomImagesPage />} />
          <Route path="/collection" element={<ProductPage />} />
        </Routes>
      
    </div>
    </BrowserRouter>
  );
};

export default App;
