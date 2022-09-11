import React, { useState, useEffect } from "react";
import axios from "axios";
import {Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/Product/ProductCard";

const endpoint = 'http://localhost:8000/api'
const ProductList = props => {
  const [ products, setProducts ] = useState( [] )

    useEffect( () => {
      getAllProducts()
      }, [])
    
    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data.data)
    }

    return (
      <Container className="Products">
             <Row xs={1} sm={2} md={3} xl={4} className="g-4">
                 { products.map((product) => {
                  
   return (
                    <Col key={product.id}>
                        
                        <ProductCard {...product} />
                    </Col>
                 )})
             }
        </Row>
    </Container>
    
  );
}

export default ProductList