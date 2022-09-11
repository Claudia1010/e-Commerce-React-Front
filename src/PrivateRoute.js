import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import HeaderAdmin from './containers/Admin/HeaderAdmin/HeaderAdmin';

function PrivateRoute() {
   
    return (
        <>
            <div className="container">
                <HeaderAdmin/>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default PrivateRoute;