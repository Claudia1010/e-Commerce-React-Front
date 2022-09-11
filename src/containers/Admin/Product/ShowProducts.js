import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthUser from '../../../components/AuthUser/AuthUser';
import { ButtonGroup } from 'react-bootstrap';

const endpoint = 'https://ch-laravel-react-e-commerce.herokuapp.com/api'
const ShowProducts = () => {
    const [ products, setProducts ] = useState( [] )
    const {http} = AuthUser();

    useEffect( () => {
      getAllProducts()
      }, [])
    
    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        // console.log(response)
        setProducts(response.data.data)
    }

    const deleteProduct = async (id) => {
       await http.delete(`${endpoint}/deleteProductById/${id}`)
       getAllProducts();
    }

    return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { products.map( (product) => (
                    <tr key={product.id}>
                        <td> {product.name} </td>
                        <td> {product.artist} </td>
                        <td> {product.year} </td>
                        <td> {product.price} </td>
                        <td> {product.description} </td>
                        <td><img src={product.image} alt={product.name} width='50' /></td>
                        <td> {product.stock} </td>
                        <td>
                        <ButtonGroup aria-label="Actions">
                            <Link to={`/update_product/${product.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteProduct(product.id) } className='btn btn-danger'>Delete</button>
                        </ButtonGroup> 
                        </td>
                    </tr>
            )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowProducts;