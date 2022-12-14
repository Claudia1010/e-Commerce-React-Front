import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import ProductList from './containers/Product/ProductList'
import { Cart } from './components/Cart/Cart';
import Header from './components/Header/Header'
import Register from './containers/User/Register/Register'
import Login from './containers/User/Login/Login';
import Order from './containers/Order/Order';
import Footer from './components/Footer/Footer';
import  { Toaster } from 'react-hot-toast';

function PublicRoute() {
   
    return (
        <>
            <div className="App">
                <Header/>
                <Cart />
                <Toaster />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/orders" element={<Order />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default PublicRoute;