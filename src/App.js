import React from 'react';
import 'boxicons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';
import Register from './containers/User/Register/Register';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>    
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/paintings" element={<ProductList />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
