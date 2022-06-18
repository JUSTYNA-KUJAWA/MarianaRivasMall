import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProductsRequest } from './redux/productsRedux';

import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MainLayout from './components/MainLayout/MainLayout';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProductsRequest()), [dispatch]);

  return (
    <BrowserRouter>
      <MainLayout>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        <Footer/>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;