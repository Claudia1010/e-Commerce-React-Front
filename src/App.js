import React from 'react';
import 'boxicons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
