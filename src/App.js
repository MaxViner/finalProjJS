import React from 'react';
import ProductPage from './components/products';
import ReviewPage from './components/RewPage/RewPage';
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
            <Link to="/rew">Отзывы</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/rew" element={<ReviewPage />} />
        </Routes>
      
    </div>
    </BrowserRouter>
  );
};

export default App;
