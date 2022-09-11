
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthUser from '../../../components/AuthUser/AuthUser';

const endpoint = 'http://localhost:8000/api'
const ShowOrders = () => {
    const [ orders, setOrders ] = useState( [] )
    const {http} = AuthUser();
    
    useEffect( () => {
      getAllOrders()
      }, [])
    
    const getAllOrders = async () => {
        const response = await http.get(`${endpoint}/getAllOrders`)
        // console.log(response)
        setOrders(response.data.data)
    }

    const updateOrder = async (id) => {
        await http.put(`${endpoint}/changeOrderStatus/${id}`)
        .then((res)=>{
        console.log(res);
        if (res.data.success) {
            alert("Pedido modificado correctamente")   
            getAllOrders();
        } else {
            alert("Ha habido un error modificando el pedido")
        }
    })
    };

    return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Número de Pedido</th>
                    <th>Productos</th>
                    <th>Unidades</th>
                    <th>Precio Total</th>
                    <th>Estado</th>
                    <th>Cambiar Estado</th>
                </tr>
            </thead>
            <tbody>
                { orders.map( (order) => (
                    <tr key={order.id}>
                        <td> #{order.id} </td>
                        <td> 
                            {order.products.map(product => <div key={product.id}>{product.name}</div> )}
                         </td>
                        <td> {order.products.length} </td>
                        <td> {order.ammount} </td>
                        <td> {order.status? "Enviado" : "En preparación"} </td>
                        <td>
                            <button disabled={order.status} onClick={ ()=>updateOrder(order.id) } className='btn btn-danger'>Update</button>
                        </td>
                    </tr>
            )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowOrders;