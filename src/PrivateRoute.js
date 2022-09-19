import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import HeaderAdmin from './containers/Admin/HeaderAdmin/HeaderAdmin';
import ShowProducts from './containers/Admin/Product/ShowProducts';
import CreateProduct from './containers/Admin/Product/CreateProduct';
import EditProduct from './containers/Admin/Product/EditProduct';
import ShowOrders from './containers/Admin/Order/ShowOrders';
import { Toaster } from 'react-hot-toast';

function PrivateRoute() {
   
    return (
        <>
            <div className="App">
                <HeaderAdmin/>
                <Toaster />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ShowProducts />} />
                    <Route path="/add_product" element={<CreateProduct />} />
                    <Route path="/update_product/:id" element={<EditProduct />} />
                    <Route path="/get_orders" element={<ShowOrders />} />
                </Routes>
            </div>
        </>
    );
}

export default PrivateRoute;