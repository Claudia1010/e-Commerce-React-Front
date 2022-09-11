import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import HeaderAdmin from './containers/Admin/HeaderAdmin/HeaderAdmin';
import ShowProducts from './containers/Admin/Product/ShowProducts';
import CreateProduct from './containers/Admin/Product/CreateProduct';
import EditProduct from './containers/Admin/Product/EditProduct';

function PrivateRoute() {
   
    return (
        <>
            <div className="container">
                <HeaderAdmin/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ShowProducts />} />
                    <Route path="/add_product" element={<CreateProduct />} />
                    <Route path="/update_product/:id" element={<EditProduct />} />
                </Routes>
            </div>
        </>
    );
}

export default PrivateRoute;