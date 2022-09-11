import React from 'react';
import 'boxicons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';
import Register from './containers/User/Register/Register';
import ProductList from './containers/Product/ProductList';
import { Cart } from './components/Cart/Cart';
import { DataProvider } from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header/>  
        <Cart />  
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/paintings" element={<ProductList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
