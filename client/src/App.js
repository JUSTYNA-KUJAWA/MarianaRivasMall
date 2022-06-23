import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProductsRequest } from './redux/productsRedux';

import Cart from './components/features/Cart/Cart';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import MainLayout from './components/views/MainLayout/MainLayout';
import NavBar from './components/views/NavBar/NavBar';
import NotFound from './components/pages/NotFound/NotFound';
import Ceramique from './components/pages/Ceramique/Ceramique';
import Arts from './components/pages/Arts/Arts';
import Paint from './components/pages/Paint/Paint';
import Books from './components/pages/Books/Books';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProductsRequest()), [dispatch]);

  return (
    <BrowserRouter>
      <MainLayout>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/ceramique' element={<Ceramique />} />
         
          <Route path='/arts' element={<Arts />} />
          <Route path='/paint' element={<Paint />} />
          <Route path='/books' element={<Books />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;