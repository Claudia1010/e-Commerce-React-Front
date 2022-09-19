import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { Form, ListGroup } from 'react-bootstrap';
import './SearchBox.scss'
import ProductSearch from '../Product/ProductSearch';

const endpoint = 'https://ch-laravel-react-e-commerce.herokuapp.com/api'

const SearchBox = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });

  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await axios.get(`${endpoint}/searchProduct/${data.slug}`);
           
           console.log("holaa", res.data.data)
            setData({ ...data, results: res.data.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);
  
    return (
        <Form className="d-flex col col-md-4">
        <Form.Control
          type="search"
          placeholder="Buscador"
          value={data.slug}
          onChange={(e) => setData({ ...data, slug: e.target.value })}
          className="me-2 cross"
          aria-label="Search"

        />
        {data.results.length > 0 ?  
            <ListGroup className='searchbox'>
                    {data.results.map((item, pos) => (
                        <ProductSearch {...item} />
                        // <ListGroup.Item key={pos} action onClick={openModal(item.id)}>
                        //      {item.name}  
                        // </ListGroup.Item>
                    ))}
            </ ListGroup> 
        : null}
        </Form>
    
  )
}

export default SearchBox