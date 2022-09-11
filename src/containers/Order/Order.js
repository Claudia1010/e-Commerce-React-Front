
import { useEffect, useState } from 'react';
import AuthUser from '../../components/AuthUser/AuthUser';

const endpoint = 'https://ch-laravel-react-e-commerce.herokuapp.com/api'

export default function Order() {
    const {http} = AuthUser();
    const [orders,setOrders] = useState('');

    useEffect(()=>{
        getSetOrders();
    },[]);

    const getSetOrders = () =>{
        http.get('/getOrders').then((res)=>{
            setOrders(res.data.data);
            console.log(res.data.data)
        });
    }

    const deleteOrder = async (id) => {
        await http.delete(`${endpoint}/deleteOrderById/${id}`)
        getSetOrders();
     }
 
    
    // function renderElement(){
        if(orders){
            return (
              <div>
         <table className='table table-striped'>
             <thead className='bg-primary text-white'>
                 <tr>
                     <th>Número de Pedido</th>
                     <th>Productos</th>
                     <th>Unidades</th>
                     <th>Precio Total</th>
                     <th>Estado</th>
                     <th>Anular</th>
                 </tr>
             </thead>
             <tbody>
                 { orders.map( (order) => (
                     <tr key={order.id}>
                         <td> 
                            #{order.id} 
                         </td>
                         <td> 
                            {order.products.map(product => <div key={product.id}>{product.name}</div> )}
                         </td>
                         {/* sumar las cantidades de producto de cada tipo */}
                         {/* <td> {order.products.reduce((prev, next) => prev.quantity + next.quantity, 0)} </td> */}
                         <td> {order.products.length} </td>
                         <td> {order.ammount} </td>
                         <td> {order.status? "Enviado" : "En preparación"} </td>
                         <td>
                             <button disabled={order.status} onClick={ ()=>deleteOrder(order.id) } className='btn btn-danger'>Cancelar</button>
                         </td>
                     </tr>
             )) }
             </tbody>
         </table>
     </div>
            )
        }else{
            return <p>Loading.....</p>
        }
}